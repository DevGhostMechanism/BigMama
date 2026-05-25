import sql from '@/app/lib/db'
import { getSession } from '@/app/lib/session'

export const dynamic = 'force-dynamic'

export async function GET() {
  const session = await getSession()

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rows = await sql`
    SELECT id, email, created_at FROM users WHERE id = ${session.userId} LIMIT 1
  `
  const user = rows[0]

  if (!user) {
    return Response.json({ error: 'User not found' }, { status: 404 })
  }

  return Response.json({ id: user.id, email: user.email, createdAt: user.created_at })
}
