'use client'

import Link from "next/link"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function HomeNavBar() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return (
      <p>loading...</p>
    )
  }

  if (session) {
    router.push('/q')
  }

  return (
    <div className="max-lg:w-[30%] min-w-[500px] lg:h-screen lg:sticky top-0 p-16 space-y-8">
      <div className="rounded-full w-4/5 aspect-square bg-gray-500/50" />
      <div className="space-y-2">
        <p className="text-5xl text-black">ยินดีต้อนรับ</p>
        <p className="text-3xl text-black">โปรดลงชื่อเข้าใช้</p>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          href="/login"
          className="text-2xl rounded-xl bg-secondary text-black p-3 text-center"
        >
          ลงชื่อเข้าใช้
        </Link>
      </div>
    </div>
  )
}