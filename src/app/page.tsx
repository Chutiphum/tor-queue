import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="lg:flex">
      <img
        src="/bg.jpg"
        alt=""
        className="-z-50 fixed top-0 left-0 h-screen w-screen object-cover"
      />
      <div className="w-full h-full -z-40 bg-gradient-to-r from-white to-white/50 fixed top-0 left-0" />
      <div className="max-lg:w-[30%] min-w-[500px] lg:h-screen lg:sticky top-0 p-16 space-y-8">
        <div className="rounded-full w-4/5 aspect-square bg-gray-500/50" />
        <div className="space-y-2">
          <p className="text-5xl text-black">ยินดีต้อนรับ</p>
          <p className="text-3xl text-black">โปรดลงชื่อเข้าใช้</p>
        </div>
        <div className="flex flex-col gap-4">
          <Link href='/login' className="text-2xl rounded-xl bg-secondary text-black p-3 text-center">
            ลงชื่อเข้าใช้
          </Link>
          <Link
            href="/q"
            className="text-2xl rounded-xl bg-secondary text-black p-3 text-center"
          >
            ไปหน้าดูคิวก่อน (ยังไม่ทำ login)
          </Link>
        </div>
      </div>
      <div className="lg:w-full lg:h-screen text-black p-16 text-4xl space-y-8 lg:flex lg:flex-col lg:justify-center">
        <p>พิมพ์อะไรสักอย่างเกี่ยวกับเว็บนี้ something idk</p>
        <p>
          มอยส์เจอไรเซอร์เจ็ตแกรนด์ คาร์โก้
          แอ็คชั่นนิวอันตรกิริยาแพนดาเลสเบี้ยนอีแต๋นแม็กกาซีนโฟล์ค
          โอเปร่าดีพาร์ตเมนต์โฮปก๊วนอันตรกิริยา โคโยตี้ เคอร์ฟิว โชว์รูม
          ซูเปอร์ดีพาร์ทเมนต์อวอร์ดฟิวเจอร์เลกเชอร์ซูชิ โมหจริต
          ไนน์แบนเนอร์โยเกิร์ตคูลเลอร์ดิสเครดิตซัมเมอร์
          จ๊าบคลาสสิกมายองเนสแพกเกจ งี้
        </p>
        <p>
          ฟาสต์ฟู้ด โฮลวีตแครกเกอร์ ไทเฮาริกเตอร์มาร์ตรวมมิตร ฉลุยวิก ดยุก สะกอม
          ช็อปเปอร์โนติสพาวเวอร์ ดิสเครดิต ผ้าห่มโมเต็ลรายชื่อบอกซ์
          รันเวย์แคชเชียร์ กราวนด์แหววบรรพชน เซอร์ไพรส์ตัวเอง
          เพียบแปร้ไลฟ์ปิกอัพคอมเพล็กซ์เรตติ้ง แพลนสามช่าแบรนด์เลคเชอร์
          ไฮบริดมอยส์เจอไรเซอร์แจ็กพ็อต เบบี้โครนาซีรีส์แดนซ์
        </p>
        <p>
          ช็อปปิ้งเยลลี่เจี๊ยว แลนด์จิตพิสัยไฮบริดบลอนด์ซัพพลาย
          เตี๊ยมแล็บคันถธุระโปลิศลาเต้ ตู้เซฟโซนเทวาธิราชชินบัญชรคีตกวี
          บัลลาสต์เซ็นเซอร์ กรรมาชนแฟล็ตโมเต็ล รัมซานตาคลอสเจ๊บ๋อยรูบิก
          เฟรชมอคค่าทัวร์นาเมนท์ จังโก้ไอติมธุหร่ำม้งแหวว บูมพาเหรด ซีอีโอ
          เลกเชอร์แอปพริคอท ฮอตดอกมหภาคริคเตอร์ ดีเจไมเกรน เนิร์สเซอรี่
          ฮีโร่อ่อนด้อยนู้ดไฮบริด สันทนาการ
        </p>
      </div>
    </main>
  )
}
