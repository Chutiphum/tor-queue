'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'หน้าหลักแอดมิน', href: '/admin' },
  { name: 'จัดการร้านของตนเอง', href: '/admin/q' },
]

export default function AdminNav() {
  return (
    <div className="bg-primary h-screen p-4 space-y-4 text-black">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 aspect-square rounded-full overflow-hidden relative">
          <Image fill src="/car.gif" alt="avatar" />
        </div>
        <div className="-space-y-1">
          <p className="text-xl">ชื่อ นามสกุล</p>
          <p>admin@email.com</p>
          <p>[admin]</p>
        </div>
      </div>
      <div className="space-y-2">
        {navItems.map(i => (
          <AdminLink key={i.href} {...i} />
        ))}
        <Link
          href="/"
          className={`btn bg-red-500 hover:bg-red-600 text-white border-none w-full min-h-0 h-fit rounded-2xl py-2 text-lg font-normal text-start`}
        >
          ลงชื่อออก
        </Link>
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
          ? 'bg-secondary shadow-none'
          : 'bg-secondary/20'
      } hover:bg-white border-none w-full min-h-0 h-fit rounded-2xl py-2 text-lg font-normal text-start`}
    >
      {name}
    </Link>
  )
}
