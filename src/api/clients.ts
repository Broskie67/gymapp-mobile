import * as SecureStore from 'expo-secure-store'
import type { AuthTokens } from '../types/auth'

const BASE_URL = process.env.EXPO_PUBLIC_API_URL

type Options = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: unknown
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
    throw new Error(`Response status: ${res.status}`)
  }

  return res.json()
}