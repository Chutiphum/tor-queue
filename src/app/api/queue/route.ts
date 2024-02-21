import { NextRequest } from 'next/server'
import { getOneQueue } from '@/db/queue'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const queueId = searchParams.get('id')

  if (!queueId) {
    return Response.error()
  }

  try {
    const data = await getOneQueue({ qId: parseInt(queueId) })
    return Response.json(data)
  } catch (err) {
    console.error(err)
    return new Response('Error', {
      status: 500,
    })
  }
}
