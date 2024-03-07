import { NextRequest } from 'next/server'
import { deleteAllQueues } from '@/db/queue'

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const roomId = searchParams.get('id')

  if (!roomId) {
    return Response.error()
  }

  try {
    const data = await deleteAllQueues(parseInt(roomId))
    return Response.json(data)
  } catch (err) {
    console.error(err)
    return new Response('Error', {
      status: 500,
    })
  }
}
