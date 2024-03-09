'use client'

import Image from 'next/image'
import { Queue, User } from '@prisma/client'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
dayjs.locale('th')
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function QueueCard({ queue }: { queue: Queue & { user: User } }) {
  const [currentQueue, setCurrentQueue] = useState(queue)
  const router = useRouter()

  const deleteThisQueue = async () => {
    if (confirm(`คุณต้องการลบคิวของ "${queue.user.name}" หรือไม่`)) {
      axios
        .delete(
          process.env.NEXT_PUBLIC_SERVER_URL +
            '/api/queue/delete?id=' +
            queue.qId
        )
        .then(res => {
          setCurrentQueue({ ...currentQueue, deleted: true })
          router.refresh()
        })
        .catch(err => {
          alert(err)
          console.log(err)
        })
    }
  }

  return (
    <div className="bg-white px-8 py-4 rounded-xl flex justify-between">
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className={`w-16 rounded-full relative`}>
            {/* @ts-ignore */}
            <Image fill alt="" src={currentQueue.user.image || '/car2.png'} />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">{currentQueue.user.name}</p>
          <p>
            ลงชื่อ:{' '}
            {dayjs(currentQueue.createdAt).format('dd DD MMM YYYY - HH:mm')}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end text-black/50">
        {!currentQueue.deleted ? (
          <button
            className="btn btn-error rounded-[50px] text-xl font-medium"
            onClick={deleteThisQueue}
          >
            ลบ
          </button>
        ) : null}
      </div>
    </div>
  )
}
