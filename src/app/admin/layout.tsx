import AdminNav from '@/components/admin/AdminNav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <div className="h-screen sticky top-0 left-0 w-[400px]">
        <AdminNav />
      </div>
      <div className="w-full bg-gradient-to-r from-white/80 to-white/50 p-8 text-black">
        {children}
      </div>
      <img src="/bg.jpg" alt="" className="-z-50 fixed top-0 left-0 h-screen w-screen object-cover" />
    </main>
  )
}
