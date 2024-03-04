import { NextRequest, NextResponse } from "next/server";
import { addRoom } from "@/db/room";
import { roomSchema } from "@/schema/room";

export async function POST(request: NextRequest, response: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const body = await request.json()

  try {
    roomSchema.parse(body)
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({
      message: 'The data received is in the wrong format.', err
    }), {
      status: 400,
    })
  }

  try {
    const data = await addRoom(body)
    return Response.json({ message: 'The room is created successfully.', res: data })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({
      message: 'Error is occured in the server.', err
    }), {
      status: 500,
    })
  }
}
