import type { NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'
import sql from '@/app/lib/db'
import { createSession } from '@/app/lib/session'
import { RegisterSchema } from '@/app/lib/definitions'

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = RegisterSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 })
  }

  const { email, password } = parsed.data

  const existing = await sql`SELECT id FROM users WHERE email = ${email} LIMIT 1`
  if (existing.length > 0) {
    return Response.json({ error: 'Email already in use' }, { status: 409 })
  }

  const passwordHash = await bcrypt.hash(password, 12)
  const rows = await sql`
    INSERT INTO users (email, password_hash)
    VALUES (${email}, ${passwordHash})
    RETURNING id
  `
  const user = rows[0]

  await createSession(String(user.id))

  return Response.json({ id: user.id, email }, { status: 201 })
}
