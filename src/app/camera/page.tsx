'use client'

import dynamic from 'next/dynamic'

const DynamicQrScanner = dynamic(() => import('@yudiel/react-qr-scanner').then(mod => mod.Scanner), {
  ssr: false
})

import React, { useState, useEffect } from 'react'
import { Scanner } from '@yudiel/react-qr-scanner'
import axios from 'axios'
import QueueCard from '../q/QueueCard'
import { Queue, Room } from '@prisma/client'
import Image from 'next/image'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
dayjs.locale('th')

export default function Camera() {
  const [data, setData] = useState<Room | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [cameraError, setCameraError] = useState(false)

  useEffect(() => {
    if (data) {
      setShowModal(true)
    }
  }, [data])

  const handleScan = (text: string) => {
    try {
      const json = JSON.parse(text)
      getRoom(json.rId)
        .then((res: Room) => {
          if (!res) {
            return alert('ไม่พบห้องคิว')
          }
          if (!res.enabled) {
            return alert('คิวนี้ปิดแล้ว')
          }
          setData(res)
        })
        .catch(err => {
          console.log(err)
          alert(err)
        })
    } catch (err) {
      console.log(err)
      alert(err)
    }
  }

  // const handleOpenLink = () => {
  //     window.open(data);
  //     setShowModal(false);
  // };

  const getRoom = async (rId: number) => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_SERVER_URL + '/api/room?id=' + rId
    )
    return res.data
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setData(null)
  }

  const handleCameraError = (error: any) => {
    setCameraError(true)
  }

  const { data: session } = useSession()
  const router = useRouter()

  const handleSubmit = () => {
    const form = new FormData() // @ts-ignore
    form.append('uId', `${session?.user?.uId}`)
    form.append('rId', `${data?.rId}`)

    axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/api/queue/create', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(res => {
      alert('จองคิวสำเร็จ')
      router.push('/q')
    }).catch(err => {
      console.log(err)
      alert(err)
    })
  }

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      {showModal && (
        <div className="fixed w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg">
            {/* <p className="text-center">{JSON.stringify(data)}</p> */}
            {data ? (
              <div className="p-6 bg-gray-100 rounded-2xl max-w-[600px] min-h-[300px]">
                <div className="flex justify-between items-center">
                  <div className="h-24 aspect-square bg-gray-500/50 rounded-full relative overflow-hidden">
                    <Image
                      fill
                      alt=""
                      src={data.images[0] || '/car2.png'}
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* @ts-ignore */}
                <h1 className="mt-4 text-3xl">{data.title}</h1>
                <h2 className="text-xl">
                  เวลา {dayjs(new Date(data.startTime)).format('HH:mm')}
                </h2>
                <h2 className="text-xl">
                  {dayjs(new Date(data.startTime)).format('dd DD MMM YYYY')}
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                  {/* @ts-ignore */}
                  {data.description}
                </p>
              </div>
            ) : null}
            <div className="flex justify-center mt-4 gap-4">
              {/* <button onClick={handleOpenLink} className="btn btn-primary mr-2 btn-sm">Open</button> */}
              <button
                onClick={handleCloseModal}
                className="btn btn-secondary text-xl rounded-[50px]"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleSubmit}
                className="btn btn-primary text-xl rounded-[50px]"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="btn btn-outline btn-sm mb-4">
        <a href="/">Back</a>
      </div>
      <div className="h-[70vh] aspect-square bg-neutral-700 drop-shadow-lg rounded-sm">
        <div className="m-2">
          <DynamicQrScanner
            onResult={(text, result) => {
              handleScan(text)
            }}
            onError={error => {
              console.log(error?.message)
              handleCameraError(error)
            }}
            components={{ audio: true }}
          />
        </div>
      </div>
      {cameraError && (
        <p className="text-white mt-4 bg-rose-600 p-2 rounded-xl">
          Please turn on access camera
        </p>
      )}
      {/* <a href={data} className="text-center mt-4">{data}</a> */}
    </div>
  )
}
