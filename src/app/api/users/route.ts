import { getAllUsers } from "@/db/user"

export async function GET(request: Request) {
  try {
    const data = await getAllUsers()
    return Response.json(data)
  } catch (err) {
    console.error(err)
    return new Response('Error', {
      status: 500,
    })
  }
}
