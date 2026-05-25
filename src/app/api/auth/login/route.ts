import type { NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'
import sql from '@/app/lib/db'
import { createSession } from '@/app/lib/session'
import { LoginSchema } from '@/app/lib/definitions'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = LoginSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 })
  }

  const { email, password } = parsed.data

  const rows = await sql`
    SELECT id, password_hash FROM users WHERE email = ${email} LIMIT 1
  `
  const user = rows[0] as { id: number; password_hash: string } | undefined

  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  await createSession(String(user.id))

  return Response.json({ id: user.id, email })
}
