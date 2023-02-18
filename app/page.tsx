import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="h-screen relative">
        <Image src="/splash.jpg" fill alt={""} className="object-cover" />
      </div>
      <div className="min-h-screen flex items-center justify-center space-x-40">
        <a href="#" className="flex flex-col items-center group p-10">
          <Image
            src="/case.jpg"
            width="298"
            height="418"
            alt=""
            className="transition duration-1000 group-hover:scale-[1.04] group-hover:opacity-90"
          />

          <div className="mt-10 text-center group-hover:opacity-70">
            <h3>
              <span className="font-medium">Liam's Gift Case</span>
              <p>Some sub-description here</p>
            </h3>
            <p className="text-midgrey text-sm mt-3">Hounds tooth, Leather</p>
          </div>
        </a>
        <a href="#" className="flex flex-col items-center group">
          <Image
            src="/case.jpg"
            width="298"
            height="418"
            alt=""
            className="transition duration-1000 group-hover:scale-[1.04] group-hover:opacity-90"
          />

          <div className="mt-10 text-center group-hover:opacity-70">
            <h3>
              <span className="font-medium">Liam's Gift Case</span>
              <p>Some sub-description here</p>
            </h3>
            <p className="text-midgrey text-sm mt-3">Hounds tooth, Leather</p>
          </div>
        </a>
      </div>
      <div className="h-screen relative">
        <Image src="/splash2.jpg" fill alt={""} className="object-cover" />
      </div>
    </main>
  );
}
