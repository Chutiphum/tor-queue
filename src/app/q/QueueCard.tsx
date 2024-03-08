import { Queue } from '@prisma/client'
import Image from 'next/image'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
dayjs.locale('th')

export default function QueueCard({ queue }: { queue: Queue }) {
  return (
    <div className="p-6 bg-white rounded-2xl max-w-[600px] min-h-[300px]">
      <div className="flex justify-between items-center">
        <div className="h-24 aspect-square bg-gray-500/50 rounded-full relative overflow-hidden">
          <Image fill alt="" src="/car2.png" className="object-cover" />
        </div>
        {/* <div className="">
          <p className="text-end text-lg">คิวที่</p>
          <p className="text-end text-6xl">50</p>
        </div> */}
      </div>
      {/* @ts-ignore */}
      <h1 className="mt-4">{queue.room.title}</h1>
      <h2 className="text-2xl">
        เวลา {dayjs(new Date(queue.startTime)).format('HH:mm')}
      </h2>
      <h2 className="text-2xl">
        {dayjs(new Date(queue.startTime)).format('dd DD MMM YYYY')}
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        {/* @ts-ignore */}
        {queue.room.description}
      </p>
    </div>
  )
}

function zFill(n: number) {
  return n <= 9 ? `0${n}` : `${n}`
}

const days = [
  'อาทิตย์',
  'จันทร์',
  'อังคาร',
  'พุธ',
  'พฤหัสบดี',
  'ศุกร์',
  'เสาร์',
]

const months = [
  'ม.ค.',
  'ก.พ.',
  'มี.ค.',
  'เม.ย.',
  'พ.ค.',
  'มิ.ย.',
  'ก.ค.',
  'ส.ค.',
  'ก.ย.',
  'ต.ค.',
  'พ.ย.',
  'ธ.ค.',
]
