import HomeNavBar from './HomeNavBar'

export default function Home() {
  return (
    <main className="lg:flex">
      <img
        src="/bg.jpg"
        alt=""
        className="-z-50 fixed top-0 left-0 h-screen w-screen object-cover"
      />
      <div className="w-full h-full -z-40 bg-gradient-to-r from-white to-white/50 fixed top-0 left-0" />
      <HomeNavBar />
      <div className="lg:w-full lg:h-screen text-black p-16 text-4xl space-y-8 lg:flex lg:flex-col lg:justify-center">
        <p>ต่อคิว</p>
        <p>
          โปรดเข้าสู่ระบบเพื่อใช้งาน
        </p>
      </div>
    </main>
  )
}
