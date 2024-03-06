import { NextRequest, NextResponse } from "next/server";
import { deleteQueue } from "@/db/queue";
import { roomSchema } from "@/schema/room";

export async function DELETE(request: NextRequest, response: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queueId = searchParams.get('qId');

  if (!queueId) {
    return new Response('Missing qId parameter', {
      status: 400,
    });
  }

  try {
    const data = await deleteQueue({ qId: parseInt(queueId) });

    if (!data) {
      return new Response('Queue not found', {
        status: 404,
      });
    }

    return Response.json({ message: 'Queue deleted successfully', data });
  } catch (err) {
    console.error(err);
    return new Response('Error deleting queue', {
      status: 500,
    });
  }
}
