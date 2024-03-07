'use client'

import ListCard from '@/components/admin/ListCard'
import AddRoomModal from '@/components/modals/AddRoomModal'
import { Room } from '@prisma/client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ShopList({ data }: { data: Room[] }) {
  const res: JSX.Element[] = []

  data.forEach(i =>
    res.push(
      <ListCard
        key={i.rId}
        room={{
          rId: i.rId,
          title: i.title,
          description: i.description,
          startTime: i.startTime,
          endTime: i.endTime,
          images: i.images,
          enabled: i.enabled,
          createdAt: i.createdAt,
          updatedAt: i.updatedAt,
        }}
      />
    )
  )

  const [keyword, setKeyword] = useState<string>('')

  return (
    <div>
      <div className='flex mt-6 items-center justify-between'>
        <input
          type="text"
          placeholder="ค้นหาคิว..."
          className="text-2xl rounded-[50px] px-6 py-2 bg-[#d9d9d9]/50 w-1/2 max-w-[500px] sticky top-16 backdrop-blur-2xl z-50"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <button className='btn bg-secondary hover:bg-white shadow-none border-none text-2xl font-medium rounded-[50px]'>
            จัดเรียงตาม
          </button>
          <button
            className='btn bg-primary hover:bg-white shadow-none border-none text-2xl font-medium rounded-[50px]'
            // @ts-ignore
            onClick={() => document.getElementById('add_room_model').showModal()}
          >
            สร้างคิวใหม่
          </button>
          <AddRoomModal />
        </div>
      </div>
      <div className="space-y-2 mt-8">
        {res}
      </div>
    </div>
  )
}
