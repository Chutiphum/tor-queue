import { getAllRooms } from '@/db/room'
import ShopList from './ShopList'

export default async function Page() {
  const data = await getAllRooms()

  return (
    <>
      <h1 className="text-6xl">จัดการร้านของตนเอง</h1>
      <ShopList data={data} />
    </>
  )
}
