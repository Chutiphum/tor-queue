import { NextRequest, NextResponse } from 'next/server'
import { getAllQueues, getMyQueue } from '@/db/queue'

export async function GET(request: NextRequest, response: NextResponse) {
  const searchParams = request.nextUrl.searchParams
  const uId = searchParams.get('id')

  try {
    let data
    if (uId) {
      console.log('get my queues: ' + uId)
      data = await getMyQueue(parseInt(uId))
    } else {
      console.log('get all queues')
      data = await getAllQueues()
    }

    return Response.json(data)
  } catch (err) {
    console.error(err)
    return new Response('Error', {
      status: 500,
    })
  }
}
