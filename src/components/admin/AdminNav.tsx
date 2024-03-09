'use client'

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const navItems = [
  { name: 'หน้าหลักแอดมิน', href: '/admin' },
  { name: 'จัดการร้านของตนเอง', href: '/admin/q' },
  { name: 'จัดการผู้ใช้', href: '/admin/users' },
]

export default function AdminNav() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return (
      <p>loading...</p>
    )
  }

  if (!session) {
    router.push('/')
    return <p>loading...</p>
  }
  if (session && session?.user?.role !== 'admin') {
    router.push('/q')
    return <p>loading...</p>
  }

  return (
    <div className="bg-primary h-screen p-4 space-y-4 text-black">
      <div className="flex items-center space-x-4">
        <div className="w-40 h-30 aspect-square rounded-full overflow-hidden relative">
          <Image fill src={session.user?.image} alt="avatar" />
        </div>
        <div className="-space-y-1">
          <p className="text-xl mb-4">{session.user?.name}</p>
          <p>{session.user?.email}</p>
          <p>{session.user?.role}</p>
        </div>
      </div>
      <div className="space-y-2">
        {navItems.map(i => (
          <AdminLink key={i.href} {...i} />
        ))}
        <Link
          href="/q"
          className={`btn bg-red-500 hover:bg-red-600 text-white border-none w-full min-h-0 h-fit rounded-2xl py-2 text-lg font-normal text-start`}
        >
          กลับหน้าหลัก
        </Link>
        <button
          onClick={() => signOut()}
          className={`btn bg-red-500 hover:bg-red-600 text-white border-none w-full min-h-0 h-fit rounded-2xl py-2 text-lg font-normal text-start`}
        >
          ลงชื่อออก
        </button>
      </div>
    </div>
  )
}

function AdminLink({ name, href }: { name: string; href: string }) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={`btn ${
        href != '/' && pathname === href
          ? 'bg-secondary shadow-none hover:bg-white'
          : 'bg-secondary/20 hover:bg-secondary/70'
      } border-none w-full min-h-0 h-fit rounded-2xl py-2 text-lg font-normal text-start`}
    >
      {name}
    </Link>
  )
}
