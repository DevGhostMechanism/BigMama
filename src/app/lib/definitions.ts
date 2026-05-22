import { z } from 'zod'

export const RegisterSchema = z.object({
  email: z.email(),
  password: z.string().min(8, { error: 'Password must be at least 8 characters' }),
})

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
})

export type SessionPayload = {
  userId: string
}
