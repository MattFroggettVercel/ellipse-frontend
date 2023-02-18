import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="h-screen relative">
        <Image src="/splash.jpg" fill alt={""} className="object-cover" />
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center md:space-x-40">
        <a href="#" className="flex flex-col items-center group p-10">
          <div className="w-auto h-auto relative">
            <Image
              src="/case.jpg"
              fill
              alt=""
              className="transition duration-1000 group-hover:scale-[1.04] group-hover:opacity-90"
            />
          </div>

          <div className="mt-10 text-center group-hover:opacity-70">
            <h3>
              <span className="font-medium">Liam's Gift Case</span>
              <p>Some sub-description here</p>
            </h3>
            <p className="text-midgrey text-sm mt-3">Hounds tooth, Leather</p>
          </div>
        </a>
        <a href="#" className="flex flex-col items-center group">
          <div className="relative">
            <Image
              src="/case.jpg"
              fill
              alt=""
              className="transition duration-1000 group-hover:scale-[1.04] group-hover:opacity-90"
            />
          </div>

          <div className="mt-10 text-center group-hover:opacity-70">
            <h3>
              <span className="font-medium">Liam's Gift Case</span>
              <p>Some sub-description here</p>
            </h3>
            <p className="text-midgrey text-sm mt-3">Hounds tooth, Leather</p>
          </div>
        </a>
      </div>
      <div className="relative">
        <div className="h-screen sticky top-0">
          <Image src="/splash2.jpg" fill alt={""} className="object-cover" />
          <div className="absolute inset-0 bg-black z-10 opacity-5">m</div>
        </div>
        <div className="px-20 bg-gradient-to-t from-black via-black z-20 relative h-[60vh]">
          I love my baby
        </div>
      </div>

      <div className="h-screen relative">
        <Image src="/splash.jpg" fill alt={""} className="object-cover" />
      </div>
    </main>
  );
}
