'use client'

import Image from "next/image"
import Link from "next/link"
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from "next/navigation"

export default function QueuePageNavBar() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return (
      <p>loading...</p>
    )
  }

  if (!session) {
    router.push('/')
  }

  return (
    <div className="max-lg:w-[30%] min-w-[500px] lg:h-screen lg:sticky top-0 p-16 space-y-8">
      <div className="rounded-full w-4/5 aspect-square bg-gray-500/50 overflow-hidden relative">
        <Image fill src={session?.user?.image || "/car.gif"} alt="avatar" />
      </div>
      <div className="space-y-2">
        <p className="text-5xl text-black">{session?.user?.name}</p>
        <p className="text-3xl text-black">{session?.user?.email}</p>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          href="/admin"
          className="text-2xl rounded-xl bg-secondary text-black p-3 text-center"
        >
          หน้าแอดมิน
        </Link>
        <button
          onClick={() => signOut()}
          className="text-2xl rounded-xl bg-red-500 text-white p-3 text-center"
        >
          ลงชื่อออก
        </button>
      </div>
    </div>
  )
}
