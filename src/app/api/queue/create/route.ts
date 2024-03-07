import { NextRequest, NextResponse } from 'next/server'
import { queueSchemaFormData } from '@/schema/queue'
import { addQueue } from '@/db/queue'
import { getOneRoom } from '@/db/room'

export async function POST(request: NextRequest, response: NextResponse) {
  const formData = await request.formData()

  try {
    queueSchemaFormData.parse(formData)
  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({
        message: 'The data received is in the wrong format.',
        err,
      }),
      {
        status: 400,
      }
    )
  }

  const body = {
    uId: parseInt(`${formData.get('uId')}`),
    rId: parseInt(`${formData.get('rId')}`),
    startTime: `${formData.get('startTime')}`,
    endTime: `${formData.get('endTime')}`,
  }

  const room = await getOneRoom({
    rId: body.rId
  })

  if (!room) {
    return new Response(
      JSON.stringify({
        message: 'The room is not found.',
      }),
      {
        status: 400,
      }
    )
  }

  if (!room.enabled) {
    return new Response(
      JSON.stringify({
        message: 'The room is closed.',
      }),
      {
        status: 400,
      }
    )
  }

  try {
    const data = await addQueue(body)
    return Response.json({
      message: 'The room is created successfully.',
      res: data,
    })
  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({
        message: 'Error is occured in the server.',
        err,
      }),
      {
        status: 500,
      }
    )
  }
}
