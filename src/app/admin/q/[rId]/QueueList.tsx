'use client'

import { Queue, Room, User } from "@prisma/client";
import { useState } from "react";
import QRCode from 'react-qr-code'

import QueueCard from "./QueueCard";
import axios from "axios";
import { useRouter } from "next/navigation";

interface QueueDetail extends Queue {
  user: User
}

interface RoomDetail extends Room {
  queues: QueueDetail[]
}

export default function QueueList({ room }: { room: RoomDetail }) {
  const [keyword, setKeyword] = useState('')
  const [showDeleted, setShowDeleted] = useState(false)
  const [queues, setQueues] = useState(room.queues)
  const roomQueues = !showDeleted
    ? queues.filter(i => !i.deleted)
    : queues.filter(i => i.deleted)
  const searchQueues = roomQueues.filter(i => i.user.name.toLowerCase().includes(keyword.toLowerCase()))
  const [enabled, setEnabled] = useState(room.enabled)

  const router = useRouter()

  const deleteThisRoom = async () => {
    if (confirm(`คุณต้องการลบห้องคิว "${room.title}" หรือไม่`)) {
      axios
        .delete(process.env.NEXT_PUBLIC_SERVER_URL + '/api/room/delete?id=' + room.rId)
        .then(res => {
          router.back()
          alert('การลบเสร็จสิ้น')
        })
        .catch(err => {
          alert(err)
          console.log(err)
        })
    }
  }

  const deleteAllQueues = async () => {
    if (confirm(`คุณต้องการลบคิวทั้งหมดหรือไม่`)) {
      axios
        .delete(
          process.env.NEXT_PUBLIC_SERVER_URL + '/api/room/deleteAllQueues?id=' + room.rId
        )
        .then(res => {
          const newQ: QueueDetail[] = JSON.parse(JSON.stringify(queues))
          newQ.forEach(i => (i.deleted = true))
          setQueues(newQ)
          router.refresh()
        })
        .catch(err => {
          alert(err)
          console.log(err)
        })
    }
  }

  const on = async () => axios.get(`/api/room/switch?id=${room.rId}&turn=on`).then(res => setEnabled(true))
  const off = async () => axios.get(`/api/room/switch?id=${room.rId}&turn=off`).then(res => setEnabled(false))

  return (
    <div>
      <div className="flex mt-6 items-center justify-between">
        <input
          type="text"
          placeholder="ค้นหาคิว..."
          className="text-2xl rounded-[50px] px-6 py-2 bg-[#d9d9d9]/50 w-[300px] sticky top-16 backdrop-blur-2xl z-40"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <div role="tablist" className="tabs tabs-boxed">
            <a
              role="tab"
              className={`tab ${!showDeleted ? 'tab-active' : ''}`}
              onClick={() => setShowDeleted(false)}
            >
              ปัจจุบัน
            </a>
            <a
              role="tab"
              className={`tab ${showDeleted ? 'tab-active' : ''}`}
              onClick={() => setShowDeleted(true)}
            >
              ประวัติ
            </a>
          </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn bg-primary hover:bg-primary shadow-none border-none text-2xl font-medium rounded-[50px]"
            // @ts-ignore
            onClick={() => document.getElementById('qr_code').showModal()}
          >
            QR Code
          </button>
          <button
            className="btn btn-error shadow-none border-none text-2xl font-medium rounded-[50px]"
            onClick={deleteThisRoom}
          >
            ลบห้องคิว
          </button>
          <button
            className="btn btn-error shadow-none border-none text-2xl font-medium rounded-[50px]"
            onClick={deleteAllQueues}
          >
            ลบคิวทั้งหมด
          </button>
          <button
            className={`btn ${
              enabled
                ? 'bg-primary hover:bg-secondary'
                : 'border-primary border-2 bg-gray-300 hover:bg-gray-400'
            } shadow-none border-none text-2xl font-medium rounded-[50px]`}
            onClick={() => (enabled ? off() : on())}
          >
            {enabled ? 'ปิดคิว' : 'เปิดคิว'}
          </button>
        </div>
      </div>
      {/* <p>{JSON.stringify(room.queues)}</p> */}
      <div className="mt-8 flex flex-col gap-2">
        {searchQueues.map(i => (
          <QueueCard key={i.qId} queue={i} />
        ))}
        {/* <h2>กำลังทำ</h2>
        {searchQueues.map(i => (
          !i.finished ? <QueueCard key={i.qId} queue={i} /> : null
          ))}
        <hr/>
        <h2>เสร็จแล้ว</h2>
        {searchQueues.map(i => (
          i.finished ? <QueueCard key={i.qId} queue={i} /> : null
        ))} */}
      </div>
      <dialog id="qr_code" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <QRCode value={JSON.stringify({
            rId: room.rId,
            // title: room.title,
            // image: room.images[0]
          })} />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn rounded-[50px] text-xl">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}