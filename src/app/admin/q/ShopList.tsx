'use client'

import ListCard from '@/components/admin/ListCard'
import AddRoomModal from '@/components/modals/AddRoomModal'
import Link from 'next/link'
import { useState } from 'react'

export default function ShopList() {
  const res = []

  for (let i = 0; i < 20; i++) {
    res.push(
      <ListCard
        key={i}
        room={{
          rId: i,
          title: 'Your mom ' + i,
          description: 'Lorem ipsum',
          startTime: new Date(),
          endTime: new Date(),
          images: [],
          enabled: true,
          createdAt: new Date(2024, 0, 1),
          updatedAt: new Date(2024, 0, 1),
        }}
      />
    )
  }

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
      <div className="space-y-2 mt-8">{res}</div>
    </div>
  )
}
