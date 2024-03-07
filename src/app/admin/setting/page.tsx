'use client'

const Page = () => {
  return (
    <>
      <div className="container p-4 w-[600px] h-[600px] bg-white rounded-lg">
        <div className="m-4">
          <div>
            <h1 className="text-6xl">ตั้งค่าผู้ใช้</h1>
          </div>
          <div>
            <h2 className="text-3xl">ระดับ</h2>
            <input type="checkbox" className="toggle" />
            <h2 className="text-3xl">สถานะไอดี</h2>
            <input type="checkbox" className="toggle" />
          </div>
          <div>
            <button className="btn btn-outline btn-error">ลบผู้ใช้</button>
          </div>
          <div className="space-x-2 mt-2 ml-48">
            <button className="btn">ยกเลิก</button>
            <button className="btn btn-accent">บันทึก</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Page
