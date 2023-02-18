import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="h-screen relative">
        <Image
          src="/splash.jpg"
          fill
          alt={""}
          className="object-cover"
        />
      </div>
      <div className="m-auto grid gap-10 grid-cols-2 max-w-5xl my-20">
        <div className="flex flex-col items-center">
          <Image
            src="/case.jpg"
            width="298"
            height="418"
            alt=""
            className="object-cover"
          />

          Liam's Gift Case
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/case.jpg"
            width="298"
            height="418"
            alt=""
            className="object-cover"
          />

          Liam's Gift Case
        </div>
      </div>
      <div className="h-screen relative">
        <Image
          src="/splash2.jpg"
          fill
          alt={""}
          className="object-cover"
        />
      </div>
    </main>
  )
}
