import React, { useState } from 'react'
import Link from 'next/link'

export default function Main({ data }: any) {

  

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

                {data.map((item: any, i: number) => (
                    <div key={i}>
                        <Link href={`/admin/users?userid=${item.id}`}>
                            <div className="bg-white p-5 w-full rounded-lg my-4">

                                <div className="flex justify-between items-center">

                                    <div className="">
                                        <div className="grid grid-cols-3 place-items-center gap-x-2">
                                            <div className="col-span-1">
                                                <img src={item.img} alt="" className='h-[100px]' />
                                            </div>
                                            <div className="col-span-2">
                                                <p className='text-[30px] font-semibold'>{item.name}</p>
                                                <p className='text-[18px]'>ระดับ {item.gender}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">

                                        <p className='text-gray-400 text-[20px]'>login ล่าสุด</p>
                                        <p className='text-gray-400 text-[20px]'>วว ดด ปป ชม:นท</p>
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
