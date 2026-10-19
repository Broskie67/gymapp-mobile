import { request } from './clients'
import type { AuthResponse } from '../types/auth'

export const login = (email: string, password: string, rememberMe = false) => {
  return request<AuthResponse>('/auth/login', { 
    method:'POST', 
    body: { email, password, rememberMe }
  })
}

export const register = (username: string, email: string, password: string) => {
  return request<AuthResponse>('/auth/register', {
    method:'POST',
    body:{ username, email, password}
  })
}

export const refresh = (refreshToken: string) => {
  return request<AuthResponse>('/auth/refresh', {
    method: 'POST',
    body: { refreshToken },
  })
}