import Image from 'next/image'
import { Room } from '@/types/room'

export default function ListCard({ room }: { room: Room }) {
  return (
    <div className="bg-white px-8 py-4 rounded-xl flex justify-between">
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-16 rounded-full relative">
            <Image fill alt="" src="/car2.png" />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">{room.title}</p>
          <p>{room.description}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end text-black/50">
        <p>วว/ดด/ปป ชม:นท</p>
      </div>
    </div>
  )
}
