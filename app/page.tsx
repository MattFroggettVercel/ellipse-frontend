import Image from "next/image";
import { Playfair_Display } from "@next/font/google";
import StickyHero from "@/components/StickyHero";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="h-screen relative">
        <Image src="/splash.jpg" fill alt={""} className="object-cover" />
        <div className="text-white absolute bottom-0 pb-40 px-8">
          <h2 className={`${playfair.className} text-4xl mb-6`}>
            Timeless Luxury
          </h2>
          <p>
            Discover our collection of vintage inspired handmade watch cases
          </p>
        </div>
      </div>
      <div className="min-h-screen px-8 py-28 flex flex-col space-y-24">
        <a href="#" className="flex flex-col items-center">
          <Image
            src="/case.jpg"
            width="296"
            height="416"
            alt=""
            className="w-2/3"
          />
          <div className="mt-10 text-center">
            <h3>
              <span className="font-medium text-lg">Liam's Gift Case</span>
              <p>Some sub-description here</p>
            </h3>
            <p className="text-midgrey text-sm mt-3">Hounds tooth, Leather</p>
          </div>
        </a>

        <a href="#" className="flex flex-col items-center">
          <Image
            src="/case.jpg"
            width="296"
            height="416"
            alt=""
            className="w-2/3"
          />
          <div className="mt-10 text-center">
            <h3>
              <span className="font-medium text-lg">Liam's Gift Case</span>
              <p>Some sub-description here</p>
            </h3>
            <p className="text-midgrey text-sm mt-3">Hounds tooth, Leather</p>
          </div>
        </a>
      </div>
      {/* <div className="min-h-screen flex flex-col items-center justify-center md:space-x-40">
        <a href="#" className="flex flex-col items-center group p-10">
          <div className="w-full h-[500px] relative">
            <Image
              src="/case.jpg"
              fill
              alt=""
              className="object-contain transition duration-1000 group-hover:scale-[1.04] group-hover:opacity-90"
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
      </div> */}

      <StickyHero />

      <div className="h-screen relative">
        <Image src="/splash.jpg" fill alt={""} className="object-cover" />
      </div>
    </main>
  );
}
