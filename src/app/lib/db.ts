import { neon } from '@neondatabase/serverless'

let _sql: ReturnType<typeof neon> | null = null

function sql(strings: TemplateStringsArray, ...values: unknown[]) {
  if (!_sql) {
    _sql = neon(process.env.DATABASE_URL!)
  }
  return _sql(strings, ...values) as Promise<Record<string, unknown>[]>
}

export default sql
