import type { PublicUser } from "./user";

export type LoginDto = { email: string; password: string }
export type AuthTokens = { accessToken: string; refreshToken: string }
export type AuthResponse = { user: PublicUser; token: AuthTokens }
