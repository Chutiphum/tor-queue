import { NextRequest } from 'next/server'
import { getOneRoom } from '@/db/room'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const roomId = searchParams.get('id')

  if (!roomId) {
    return Response.error()
  }

  try {
    const data = await getOneRoom({ rId: parseInt(roomId) })
    return Response.json(data)
  } catch (err) {
    console.error(err)
    return new Response('Error', {
      status: 500
    })
  }
}
