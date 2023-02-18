import './globals.css'
import Image from 'next/image'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="absolute inset-x-0 p-14 z-10">
          <nav className="flex items-center justify-between text-grey">
            <ul className="flex flex-1 self-stretch items-center">
              <li><a className="p-5" href="#">Cases</a></li>
              <li><a className="p-5" href="#">Something</a></li>
            </ul>
            <div className="flex">
              <Image
                src="/logo.svg"
                alt="Ellipse Logo"
                width={200}
                height={57}
                priority
              />
            </div>
            <ul className="flex flex-1 justify-end">
              <li>
                <Image
                  src="/icons/bag.svg"
                  alt="Ellipse Logo"
                  width={40}
                  height={40}
                  priority
                />
              </li>
            </ul>
          </nav>
        </div>
        {children}
      </body>
    </html>
  )
}
