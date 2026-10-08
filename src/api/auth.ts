import { request } from './clients'
import { PublicUser } from '../types/user'

type AuthResponse = {
  token: string
  user: PublicUser
}

export const login = (email: string, password: string) => {
  return request<AuthResponse>('/auth/login', { method:'POST', body: { email, password }})
}