import QueueList from "./QueueList"
import { getAllQueues } from '@/db/queue'
import QueuePageNavBar from "./QueuePageNavBar"

export default async function Page() {
  const data = await getAllQueues()

  return (
    <main className="lg:flex">
      <img src="/bg.jpg" alt="" className="-z-50 fixed top-0 left-0 h-screen w-screen object-cover" />
      <div className="w-full h-full -z-40 bg-gradient-to-r from-white to-white/50 fixed top-0 left-0" />
      <QueuePageNavBar />
      <div className="w-full text-black p-16 text-4xl space-y-8">
        <QueueList queues={data} />
      </div>
    </main>
  )
}
