import Image from 'next/image'

function Home_Backup() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className='chat'>
asdfasdfsaf
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <main className="flex relative">
      <Image fill src='/bg.jpg' alt='' className='-z-50' />
      <div className='w-full h-full -z-40 bg-gradient-to-r from-white to-white/50 fixed top-0 left-0' />
      <div className="w-[30%] h-screen sticky top-0 p-16 space-y-8">
        <div className="rounded-full w-4/5 aspect-square bg-gray-500/50" />
        <div className="space-y-2">
          <p className="text-5xl text-black">ยินดีต้อนรับ</p>
          <p className="text-3xl text-black">โปรดลงชื่อเข้าใช้</p>
        </div>
        <button className="text-2xl rounded-xl bg-secondary text-black p-3">
          ลงชื่อเข้าใช้ด้วยแม่มึง
        </button>
      </div>
      <div className="w-full h-screen text-black p-16 text-4xl space-y-8 flex flex-col justify-center">
        <p>
          พิมพ์อะไรสักอย่างเกี่ยวกับเว็บนี้ something idk
        </p>
        <p>
          มอยส์เจอไรเซอร์เจ็ตแกรนด์ คาร์โก้ แอ็คชั่นนิวอันตรกิริยาแพนดาเลสเบี้ยนอีแต๋นแม็กกาซีนโฟล์ค โอเปร่าดีพาร์ตเมนต์โฮปก๊วนอันตรกิริยา โคโยตี้ เคอร์ฟิว โชว์รูม ซูเปอร์ดีพาร์ทเมนต์อวอร์ดฟิวเจอร์เลกเชอร์ซูชิ โมหจริต ไนน์แบนเนอร์โยเกิร์ตคูลเลอร์ดิสเครดิตซัมเมอร์ จ๊าบคลาสสิกมายองเนสแพกเกจ งี้
        </p>
        <p>
          ฟาสต์ฟู้ด โฮลวีตแครกเกอร์ ไทเฮาริกเตอร์มาร์ตรวมมิตร ฉลุยวิก ดยุก สะกอม ช็อปเปอร์โนติสพาวเวอร์ ดิสเครดิต ผ้าห่มโมเต็ลรายชื่อบอกซ์ รันเวย์แคชเชียร์ กราวนด์แหววบรรพชน เซอร์ไพรส์ตัวเอง เพียบแปร้ไลฟ์ปิกอัพคอมเพล็กซ์เรตติ้ง แพลนสามช่าแบรนด์เลคเชอร์ ไฮบริดมอยส์เจอไรเซอร์แจ็กพ็อต เบบี้โครนาซีรีส์แดนซ์
        </p>
        <p>
          ช็อปปิ้งเยลลี่เจี๊ยว แลนด์จิตพิสัยไฮบริดบลอนด์ซัพพลาย เตี๊ยมแล็บคันถธุระโปลิศลาเต้ ตู้เซฟโซนเทวาธิราชชินบัญชรคีตกวี บัลลาสต์เซ็นเซอร์ กรรมาชนแฟล็ตโมเต็ล รัมซานตาคลอสเจ๊บ๋อยรูบิก เฟรชมอคค่าทัวร์นาเมนท์ จังโก้ไอติมธุหร่ำม้งแหวว บูมพาเหรด ซีอีโอ เลกเชอร์แอปพริคอท ฮอตดอกมหภาคริคเตอร์ ดีเจไมเกรน เนิร์สเซอรี่ ฮีโร่อ่อนด้อยนู้ดไฮบริด สันทนาการ
        </p>
      </div>
    </main>
  )
}
