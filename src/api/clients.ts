import * as SecureStore from 'expo-secure-store'
import type { AuthTokens } from '../types/auth'

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

export async function request<T>(
  path: string,
  { method = 'GET', body }: Options = {},
): Promise<T> {
  const token = await SecureStore.getItemAsync('accessToken')
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}`})
    },
    body: body ? JSON.stringify(body) : undefined
  })
  if(!res.ok){
    const errorBody = await res.json()
    throw new ApiError(res.status, errorBody.message ?? `Erreur ${res.status}`)
  }

  const json: ApiResponse<T> = await res.json()

  return json.data
}