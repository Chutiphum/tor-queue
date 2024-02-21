import Image from "next/image";
import { QueueEntry } from '@/types/queueEntry'

export default function QueueCard({ queue }: { queue: QueueEntry }) {
  return (
    <div className="p-6 bg-white rounded-2xl w-[600px] min-h-[300px]">
      <div className="flex justify-between items-center">
        <div className="h-24 aspect-square bg-gray-500/50 rounded-full relative overflow-hidden">
          <Image fill alt="" src="/car2.png" className="object-cover" />
        </div>
        <div className="">
          <p className="text-end text-lg">คิวที่</p>
          <p className="text-end text-6xl">50</p>
        </div>
      </div>
      <h1 className="mt-4">{queue.shopTitle}</h1>
      <h2 className="text-2xl">
        เวลา {zFill(queue.startTime.getHours())}:
        {zFill(queue.startTime.getMinutes())} -{' '}
        {zFill(queue.endTime.getHours())}:{zFill(queue.endTime.getMinutes())}
      </h2>
      <h2 className="text-2xl">
        วัน{days[queue.endTime.getDay()]} {queue.endTime.getDate()}{' '}
        {months[queue.endTime.getMonth()]}
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet eos
        molestiae, laudantium, distinctio adipisci mollitia et minus sapiente
        esse, nihil quae optio provident totam magni. Commodi inventore ea hic
        tempora!
      </p>
    </div>
  )
}

function zFill(n: number) {
  return n <= 9 ? `0${n}` : `${n}`
}

const days = [
  'อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'
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
  'ธ.ค.'
]
