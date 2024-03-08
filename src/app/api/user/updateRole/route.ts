import { NextRequest } from 'next/server'
import { updateUser } from '@/db/user'

export async function PUT(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const userId = searchParams.get('id')

  if (!userId) {
    return Response.error()
  }

  try {
    const data = await updateUser(parseInt(userId))
    return Response.json(data)
  } catch (err) {
    console.error(err)
    return new Response('Error', {
      status: 500,
    })
  }
}