import { getAllRooms } from '@/db/room'

export async function GET(request: Request) {
  try {
    const data = await getAllRooms()
    return Response.json(data)
  } catch (err) {
    console.error(err)
    return new Response('Error', {
      status: 500,
    })
  }
}
