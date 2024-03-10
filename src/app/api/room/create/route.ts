import { NextRequest, NextResponse } from "next/server";
import { addRoom } from "@/db/room";
import { roomSchema, roomSchemaFormData } from "@/schema/room";
import { Prisma } from "@prisma/client";
import { getPublicURL, uploadFile } from "@/supabase/storage";

export async function POST(request: NextRequest, response: NextResponse) {
  const formData = await request.formData()

  // try {
  //   roomSchemaFormData.parse(formData)
  // } catch (err) {
  //   console.error(err)
  //   return new Response(JSON.stringify({
  //     message: 'The data received is in the wrong format.', err
  //   }), {
  //     status: 400,
  //   })
  // }

  const file = formData.get('image')
  // if (!(file instanceof File)) {
  //   return new Response(JSON.stringify({
  //     message: 'The data received is in the wrong format.'
  //   }), {
  //     status: 400,
  //   })
  // }
  // @ts-ignore
  const image = await uploadFile('tor-queue-dev', 'images/', file)
  const imgPublicPath = await getPublicURL('tor-queue-dev', image)

  const body: Prisma.RoomCreateInput = {
    title: `${formData.get('title')?.valueOf()}`,
    description: `${formData.get('description')?.valueOf()}`,
    startTime: `${formData.get('startTime')?.valueOf()}`,
    endTime: `${formData.get('endTime')?.valueOf()}`,
    enabled: formData.get('enabled')?.valueOf() === 'true' ? true : false,
    images: [imgPublicPath],
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
