import { create } from 'zustand'
import * as authApi from '../api/auth'
import type { PublicUser } from '../types/user'

type AuthState = {
  currentUser : PublicUser | null,
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>()((set) => ({
  currentUser: null,

  login: async (email, password) => {
    const { user } = await authApi.login(email, password)
    console.log('user reçu :', user)
    
    set({ currentUser: user })
    
  },

  logout: () => set({currentUser: null})
  
}))