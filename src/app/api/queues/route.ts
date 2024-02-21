import { getAllQueues } from '@/db/queue'

export async function GET(request: Request) {
  try {
    const data = await getAllQueues()
    return Response.json(data)
  } catch (err) {
    console.error(err)
    return new Response('Error', {
      status: 500,
    })
  }
}
