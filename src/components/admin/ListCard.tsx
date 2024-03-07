'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Room } from '@prisma/client'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
dayjs.locale('th')

export default function ListCard({ room }: { room: Room }) {
  return (
    <Link href={`/admin/q/${room.rId}`} className="bg-white px-8 py-4 rounded-xl flex justify-between hover:bg-gray-200 transition">
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div
            className={`w-16 rounded-full relative ${
              room.enabled ? 'ring ring-green-500 ring-offset-2' : 'grayscale'
            }`}
          >
            <Image fill alt="" src={room.images[0] || '/no.png'} />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">{room.title}</p>
          <p>{room.description}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end text-black/50">
        <p>เริ่มต้น: {dayjs(room.startTime).format('dd DD MMM YYYY - HH:mm')} น.</p>
        <p>สิ้นสุด: {dayjs(room.endTime).format('dd DD MMM YYYY - HH:mm')} น.</p>
      </div>
    </Link>
  )
}
