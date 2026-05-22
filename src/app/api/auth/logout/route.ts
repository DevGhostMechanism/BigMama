import { deleteSession } from '@/app/lib/session'

export async function POST() {
  await deleteSession()
  return Response.json({ message: 'Logged out' })
}
