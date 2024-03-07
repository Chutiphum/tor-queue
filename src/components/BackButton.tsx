'use client'

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.back()} className="btn bg-primary hover:bg-secondary text-2xl font-medium border-none shadow-none rounded-[50px]">
      ย้อนกลับ
    </button>
  )
}
