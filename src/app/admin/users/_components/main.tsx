import React, { useState } from 'react'
import Link from 'next/link'
import { User } from '@prisma/client'

export default function Main({ data }: { data: User[] }) {

    return (
        <div>
            <h1 className="text-6xl">จัดการผู้ใช้ทั้งหมดในระบบ</h1>

            <div className="mt-8"></div>

            <div className="flex justify-between">
                <div className="">
                    <input type="text" className='bg-[#D9D9D9] p-3 rounded-3xl text-[20px] px-12' placeholder='ค้นหาคิว...' />
                </div>

                <div className="">

                    <button className='p-2 px-4 bg-[#FFDAC6] font-semibold rounded-3xl text-[20px]'>จัดเรียงตาม</button>
                </div>
            </div>

            <div className="">
                {data.map((item, i: number) => (
                    <div key={i}>
                        <Link href={`/admin/users?userid=${item.uId}`}>
                            <div className="bg-white p-5 w-full rounded-lg my-4">
                                <div className="flex justify-between items-center px-8">
                                    <div className="flex justify-center items-center gap-8">
                                        <div className="w-[100px]">
                                            <img src={item.image} className='w-[100px] aspect-square object-cover overflow-hidden rounded-full shadow-md' />
                                        </div>
                                        <div>
                                            <p className='text-[30px] font-semibold'>{item.name}</p>
                                            <p className='text-[24px] font-semibold'>{item.email}</p>
                                            <p className='text-[18px]'>ระดับ {item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                ))}
            </div>

        </div>
    )
}
