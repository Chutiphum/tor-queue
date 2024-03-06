import { NextRequest } from 'next/server'
import { addQueue } from '@/db/queue'
import { addQueueSchema } from "@/schema/queue";

export async function POST(request: NextRequest, response: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const body = await request.json()
  

  try {
    addQueueSchema.parse(body)
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({
      message: 'The data received is in the wrong format.', err
    }), {
      status: 400,
    })
  }

  try {
    const data = await addQueue(body)
    return Response.json({ message: 'yaahhooooo.', res: data })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({
      message: 'Error is occured in the server.', err
    }), {
      status: 500,
    })
  }
}
