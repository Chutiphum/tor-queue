'use client'

import { useState, useEffect } from 'react'
import QueueCard from './QueueCard'
import { Queue } from '@prisma/client'
import { useSession } from 'next-auth/react'
import axios from 'axios'

export default function QueueList() {
  const { data: session } = useSession()
  const [queues, setQueues] = useState<Queue[]>([])
  const [keyword, setKeyword] = useState<string>('')
  const [searchedList, setSearchedList] = useState<Queue[]>([])

  useEffect(() => {
    if (session?.user?.uId) {
      const res = axios
        .get(
          process.env.NEXT_PUBLIC_SERVER_URL +
            '/api/queues?id=' +
            session?.user?.uId
        )
        .then(res => {
          setQueues(res.data)
        })
    }
  })
  useEffect(() => {
    // @ts-ignore
    setSearchedList(queues.filter(i => i.room.title.includes(keyword)))
  }, [queues, keyword])

  return (
    <main className="space-y-4 max-w-[600px]">
      <input
        type="text"
        placeholder="ค้นหาคิว..."
        className="rounded-[50px] px-6 py-2 bg-[#d9d9d9]/50 w-full sticky top-16 backdrop-blur-2xl border-4 border-[#d9d9d9]-300 z-50"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <br />
      <br />

      <h1>รายการคิวที่กำลังต่อ</h1>
      {searchedList.map(q =>
        !q.finished ? <QueueCard key={q.qId} queue={q} /> : null
      )}
      <br />

      <h1>รายการคิวที่เสร็จแล้ว</h1>
      {searchedList.map(q =>
        q.finished ? <QueueCard key={q.qId} queue={q} /> : null
      )}
    </main>
  )
}
