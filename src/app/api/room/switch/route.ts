import { NextRequest } from 'next/server'
import { turnOff, turnOn } from '@/db/room'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const roomId = searchParams.get('id')
  const turn = searchParams.get('turn')

  if (!roomId) {
    return Response.error()
  }

  try {
    var data
    if (turn === 'on') {
      data = await turnOn(parseInt(roomId))
    }
    else if (turn === 'off') {
      data = await turnOff(parseInt(roomId))
    }

    return Response.json(data)
  } catch (err) {
    console.error(err)
    return new Response('Error', {
      status: 500,
    })
  }
}
