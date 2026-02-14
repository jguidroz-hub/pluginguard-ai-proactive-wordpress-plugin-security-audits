import { NextRequest } from 'next/server'
export async function auth() {
  return { user: { id: 'demo', name: 'Demo User', email: 'demo@example.com' } }
}
