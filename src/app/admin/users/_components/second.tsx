import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Switch from './switch';

export default function Second({ dataone }: any) {

    const ref = useRef<HTMLDialogElement>(null);
    const handleShow = useCallback(() => {
        ref.current?.showModal();
    }, [ref]);


    const [active1, setActive1] = useState<any>("ผู้ขาย")
    const [active2, setActive2] = useState<any>("ปกติ")

    useEffect(() => {
        console.log(dataone);

    }, [])


    const showModal = () => {
        const doc = document.getElementById('my_modal_1')?.showModal()
    }
    return (
        <div>
            <Link href={`/admin/users`}>
                <button className='bg-[#EEA650] text-[23px] rounded-3xl p-2 px-4'>ย้อนกลับ</button>
            </Link>
            <h1 className="text-6xl">รายละเอียดผู้ใช้</h1>


            <div className="flex mt-5 items-center">

                <div className="">
                    <img src={dataone.img} className='h-[200px] rounded-full' alt="" />
                </div>

                <div className="ml-12">
                    <p className='text-[36px] font-semibold leading-[3rem]'>{dataone.name}</p>
                    <p className='text-[30px] leading-[2rem]'>{`cat@gmail.com`}</p>
                    <p className='text-[30px] leading-[2rem]'>{`ระดับ: ผู้ขาย`}</p>
                    <p className='text-[30px] leading-[2rem]'>{`login ล่าสุด: วันนี้`}</p>

                </div>

                <div className="ml-12">
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className=" text-lg text-[40px]">ตั้งค่าผู้ใช้</h3>
                            <p className="mt-5 text-[25px]">ระดับ</p>
                            <Switch active={active1} setActive={setActive1}  list={["ผู้ใช้", "ผู้ขาย"]} />
                            <p className="mt-5 text-[25px]">สถานะไอดี</p>
                            <Switch active={active2} setActive={setActive2} list={["ปกติ", "ถูกแบน"]} />

                            <div className=" mt-7">

                                <button className='bg-[#FFE2E2] p-2 px-5 text-[25px] rounded-lg text-[#FF0000]'>ลบผู้ใช้</button>
                            </div>

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="bg-[#FFDAC6] mr-2 p-2 px-4 text-[25px] rounded-3xl">ยกเลิก</button>
                                    <button className="bg-[#EEA650] p-2 px-4 text-[25px] rounded-3xl">บันทึก</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                    <button onClick={() => showModal()} className='p-3 text-[23px] px-8 rounded-3xl shadow-lg bg-[#FFDAC6]'>ตั้งค่า</button>

                </div>
            </div>


            <div className="mt-8">

                <p className='text-[25px] font-semibold'>ร้านที่เป็นเจ้าของ (99999)</p>
            </div>
        </div>
    )
}
