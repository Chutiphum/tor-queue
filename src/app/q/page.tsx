import Image from "next/image"
import Link from "next/link"
import QueueList from "./QueueList"
import { Queue } from '@/types/queue'
import { getAllQueues } from '@/db/queue'

export default async function Page() {
  const data = await getAllQueues()

  return (
    <main className="flex">
      <img src="/bg.jpg" alt="" className="-z-50 fixed top-0 left-0" />
      <div className="w-full h-full -z-40 bg-gradient-to-r from-white to-white/50 fixed top-0 left-0" />
      <div className="w-[30%] h-screen sticky top-0 p-16 space-y-8">
        <div className="rounded-full w-4/5 aspect-square bg-gray-500/50 overflow-hidden relative">
          <Image fill src="/car.gif" alt="avatar" />
        </div>
        <div className="space-y-2">
          <p className="text-5xl text-black">ชื่อ นามสกุลผู้ใช้</p>
          <p className="text-3xl text-black">admin@email.com</p>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            href="/admin"
            className="text-2xl rounded-xl bg-secondary text-black p-3 text-center"
          >
            หน้าแอดมิน
          </Link>
          <Link
            href="/"
            className="text-2xl rounded-xl bg-red-500 text-white p-3 text-center"
          >
            ลงชื่อออก
          </Link>
        </div>
      </div>
      <div className="w-full text-black p-16 text-4xl space-y-8">
        <QueueList queues={data} />
      </div>
    </main>
  )
}

const mock: Queue[] = [
  {
    id: 0,
    number: 50,
    shopTitle: 'ก๋วยเตี๋ยว Kenny',
    finished: true,
    startTime: new Date(2024, 0, 1, 9, 0),
    endTime: new Date(2024, 1, 25, 18, 0),
  },
  {
    id: 1,
    number: 51,
    shopTitle: 'แม่มึง',
    finished: false,
    startTime: new Date(2024, 0, 1, 9, 0),
    endTime: new Date(2024, 1, 25, 18, 0),
  },
]