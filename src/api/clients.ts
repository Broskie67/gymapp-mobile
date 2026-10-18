import * as SecureStore from 'expo-secure-store'
import type { AuthResponse, AuthTokens } from '../types/auth'
import { useAuthStore } from '@/store/authStore'

const BASE_URL = process.env.EXPO_PUBLIC_API_URL

type Options = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: unknown
}
type ApiResponse<T> = {
  status: number
  message: string
  data: T
  path: string
  timestamp: string
}

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
  }
}

let refreshPromise: Promise<boolean> | null = null

async function doRefresh(): Promise<boolean> {
  const refreshToken = await SecureStore.getItemAsync('refreshToken')
  if (!refreshToken){
    await clearSession()
    return false
  } 

  try {
    const res = await fetch(`${BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    })

    if (!res.ok) {
      if (res.status === 401 || res.status === 403) await clearSession()
      return false
    }

    const json: ApiResponse<AuthResponse> = await res.json()
    await SecureStore.setItemAsync('refreshToken', json.data.tokens.refreshToken)
    useAuthStore.setState({
      currentUser: json.data.user,
      accessToken: json.data.tokens.accessToken,
    })
    return true
  } catch {
    return false
  }
}

async function refreshTokens(): Promise<boolean> {
   refreshPromise ??= doRefresh().finally(() => { refreshPromise = null })
  return refreshPromise
}

export async function clearSession() {
  await SecureStore.deleteItemAsync('accessToken')
  await SecureStore.deleteItemAsync('refreshToken')
  useAuthStore.setState({ accessToken: null })
}

// À appeler au démarrage de l'app, avant d'afficher login ou home
export async function restoreSession(): Promise<boolean> {
  const accessToken = await SecureStore.getItemAsync('accessToken')
  if (accessToken) {
    useAuthStore.setState({ accessToken })
    return true // s'il est expiré, le premier 401 déclenchera le refresh
  }
  return refreshTokens()
}

export async function request<T>(
  path: string,
  options: Options = {},
  retry = true,
): Promise<T> {
  const { method = 'GET', body } = options
  const token = useAuthStore.getState().accessToken

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  // Plus de condition sur `token`, mais on évite /auth/* (un 401 au login = mauvais mot de passe)
  if (res.status === 401 && retry && !path.startsWith('/auth/')) {
    if (await refreshTokens()) return request<T>(path, options, false)
  }

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}))
    throw new ApiError(res.status, errorBody.message ?? `Erreur ${res.status}`)
  }

  if (res.status === 204) return undefined as T

  const json: ApiResponse<T> = await res.json()
  return json.data
}