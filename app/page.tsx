import Image from "next/image";
import { Suspense } from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-16">
      <div className="w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex">
        <p>HOME</p>
        <p>ABOUT</p>
        <p>PROJECTS</p>
        <p>CONTACT</p>
      </div>
      <div className="flex flex-col absolute h-5/6 justify-center items-center m-0">
        <div className="text-left ">
          <div className="p-5">
            <p className="text-6xl space-mono-bold leading-loose">
              Hello!, I&apos;m Supaporn
            </p>
            <p className="text-6xl space-mono-bold">A Software Engineer</p>
          </div>
          <div className="leading-6 p-5">
            <p className="max-w-lg space-mono-regular">
              I thrive on transforming challenging concepts into elegant,
              practical solutions through meticulous coding and design.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
