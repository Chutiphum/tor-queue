import { getAllRooms } from '@/db/room'

export async function GET(request: Request) {
  const data = await getAllRooms()
  return Response.json(data)
}
