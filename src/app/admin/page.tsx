'use client'

import ChartDiv from './ChartDiv'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter();
  router.replace('/admin/q')

  return (
    <div>
    </div>
  )
}
