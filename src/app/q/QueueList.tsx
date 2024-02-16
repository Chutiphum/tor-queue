'use client'

import { useState } from "react"
import { Queue } from "@/types/queue"
import QueueCard from "./QueueCard"

export default function QueueList({
  queues
}: {
  queues: Queue[]
}) {
  const [keyword, setKeyword] = useState<string>('')

  return (
    <main className="space-y-4 w-[600px]">
      <input
        type="text"
        placeholder="ค้นหาคิว..."
        className="rounded-[50px] px-6 py-2 bg-[#d9d9d9]/50 w-full"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <br />
      <br />

      <h1>รายการคิวที่กำลังต่อ</h1>
      {queues.map(q =>
        !q.finished ? <QueueCard key={q.id} queue={q} /> : null
      )}
      <br />

      <h1>รายการคิวที่เสร็จแล้ว</h1>
      {queues.map(q =>
        q.finished ? <QueueCard key={q.id} queue={q} /> : null
      )}
      <br />
    </main>
  )
}
