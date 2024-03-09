'use client'
import Link from 'next/link';
import { User } from '@prisma/client';
import React, { useState } from 'react';
import Switch from './switch';
import axios from 'axios';
import { deleteUser } from '@/db/user';

export default function Main({ data }: { data: User[] }) {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [keyword, setKeyword] = useState<string>('');

    const handleOpenModal = (user: User) => {
        setSelectedUser(user);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
    };

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
    );


    const handleSwitchToUser = async (uId: any) => {
        // @ts-ignore
        if (confirm(`ต้องการเปลี่ยน Role ของ ${selectedUser?.email} เป็น User ใช่ไหหรือไม่`)) {
            axios
                .put(
                    process.env.NEXT_PUBLIC_SERVER_URL +
                    '/api/user/updateToUser?id=' +
                    uId
                )
                .then(res => {
                    setSelectedUser(null);
                })
                .catch(err => {
                    alert(err)
                    console.log(err)
                })
        }
    }

    const handleSwitchToAdmin = async (uId: any) => {
        // @ts-ignore
        if (confirm(`ต้องการเปลี่ยน Role ของ ${selectedUser?.email} เป็น Admin ใช่ไหหรือไม่`)) {
            axios
                .put(
                    process.env.NEXT_PUBLIC_SERVER_URL +
                    '/api/user/updateToAdmin?id=' +
                    uId
                )
                .then(res => {
                    setSelectedUser(null);
                })
                .catch(err => {
                    alert(err)
                    console.log(err)
                })
        }
    }


    const handleDeleteUser = async (uId: any) => {
        // @ts-ignore
        if (confirm(`คุณต้องการลบผูใช้ Email : ${selectedUser?.email} หรือไม่`)) {
            axios
                .delete(
                    process.env.NEXT_PUBLIC_SERVER_URL +
                    '/api/user/deleteUser?id=' +
                    uId
                )
                .then(res => {
                    setSelectedUser(null);
                })
                .catch(err => {
                    alert(err)
                    console.log(err)
                })
        }
    }



    return (
        <div>
            <h1 className="text-6xl">จัดการผู้ใช้ทั้งหมดในระบบ</h1>
            <div className="mt-8"></div>
            <div className="flex justify-between">
                <input
                    type="text"
                    className="bg-[#D9D9D9] p-3 rounded-3xl text-[20px] px-12"
                    placeholder="ค้นหาคิว..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <div>
                {filteredData.map((item, i: number) => (
                    <div
                        key={i}
                        className="bg-white p-5 w-full rounded-lg my-4 flex items-center justify-between"
                    >
                        <div className="flex justify-center items-center gap-8">
                            <div className="w-[100px]">
                                <img
                                // @ts-ignore
                                    src={item.image}
                                    className="w-[100px] aspect-square object-cover overflow-hidden rounded-full shadow-md"
                                />
                            </div>
                            <div>
                                <p className="text-[30px] font-semibold">
                                    {item.name}
                                </p>
                                <p className="text-[24px] font-semibold"> {/* @ts-ignore */}
                                    {item.email}
                                </p>
                                <p className="text-[18px]"> {/* @ts-ignore */}
                                    ระดับ {item.role}
                                </p>
                            </div>
                        </div>
                        <button
                            className="p-3 text-[23px] px-8 rounded-3xl shadow-lg bg-[#FFDAC6]"
                            onClick={() => handleOpenModal(item)}
                        >
                            ตั้งค่า
                        </button>
                    </div>
                ))}
            </div>

            {selectedUser && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">{selectedUser.name}</h2> {/* @ts-ignore */}
                        <p>Email : {selectedUser.email}</p>
                        <p>UserID : {selectedUser.uId}</p> {/* @ts-ignore */}
                        <p>Role : {selectedUser.role}</p>
                        <div className='flex'>

                        </div>
                        <div className='flex'>
                            <button className="mt-4 bg-primary rounded-md pt-2 pb-2 pl-4 pr-4 text-xl mr-4" onClick={() => handleSwitchToAdmin(selectedUser.uId)}>admin</button>
                            <button className="mt-4 bg-primary rounded-md pt-2 pb-2 pl-4 pr-4 text-xl" onClick={() => handleSwitchToUser(selectedUser.uId)}>user</button>
                        </div>
                        <div className='flex'>
                            <button className="mt-4 bg-primary rounded-md pt-2 pb-2 pl-4 pr-4 text-xl" onClick={() => handleDeleteUser(selectedUser.uId)}>ลบผู้ใช้</button>
                        </div>
                        <div className='flex'>
                            <button className="mt-8 bg-primary rounded-md pt-2 pb-2 pl-4 pr-4 text-xl" onClick={handleCloseModal}>ปิด</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}