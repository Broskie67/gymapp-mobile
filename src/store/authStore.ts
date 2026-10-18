import { create } from 'zustand'
import * as authApi from '../api/auth'
import type { PublicUser } from '../types/user'
import * as SecureStore from 'expo-secure-store'


type AuthState = {
  currentUser : PublicUser | null,
  accessToken: string | null
  isRestoring: boolean
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>
  restoreSession: () => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>()((set) => ({
  currentUser: null,
  accessToken: null,
  isRestoring: true,

  login: async (email, password, rememberMe) => {
    const { user, tokens } = await authApi.login(email, password, rememberMe)
    set({ currentUser: user, accessToken: tokens.accessToken })

    if(rememberMe) await SecureStore.setItemAsync('refreshToken', tokens.refreshToken)
    else await SecureStore.deleteItemAsync('refreshToken')
    
  },

  restoreSession: async () => {
    try {
      const refreshToken = await SecureStore.getItemAsync('refreshToken')
      if(!refreshToken) return

      const { user, tokens } = await authApi.refresh(refreshToken)
      set({ currentUser: user, accessToken: tokens.accessToken})
      await SecureStore.setItemAsync('refreshToken', tokens.refreshToken)
    } catch {
      await SecureStore.deleteItemAsync('refreshToken')
    } finally {
      set({ isRestoring: false })
    }
  },

  logout: async () => {
    await SecureStore.deleteItemAsync('refreshToken')
    set({currentUser: null})
  }
}))