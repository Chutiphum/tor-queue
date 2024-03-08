import BackButton from "@/components/BackButton"
import { getOneRoom } from "@/db/room"
import QueueList from "./QueueList"

export const dynamic = 'force-dynamic'

type Props = {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({ params, searchParams }: Props) {
  const room = await getOneRoom({ rId: parseInt(params.rId) })
  if (!room) return (
    <div>
      <BackButton />
      room id {params.rId} is not found
    </div>
  )

  return (
    <div>
      <span className="flex items-center gap-4">
        <BackButton />
        <h1 className="text-3xl">ห้องคิว - {room.title}</h1>
      </span>
      {/* <p>{JSON.stringify(room)}</p> */}
      <QueueList room={room} />
    </div>
  )
}
