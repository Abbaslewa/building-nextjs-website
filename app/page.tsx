"use client";

import { ROUTES } from "./routes/page";
import Image from "next/image";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center px-6 lg:px-32 py-16">
      
      
      <section className="flex flex-col-reverse lg:flex-row items-center w-full max-w-7xl gap-12">
        
        
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Abbas Oner
            </span>{" "}
            👋
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
            A passionate{" "}
            <span className="font-semibold text-yellow-400">Full-Stack Developer</span>{" "}
            from Sudan 🇸🇩, specializing in{" "}
            <span className="text-yellow-400">Next.js, TypeScript, Node.js, TailwindCSS</span>.  
            I build modern, scalable, and responsive applications that solve real-world problems.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Link
              href={ROUTES.ABOUT}
              className="px-8 py-3 rounded-lg border border-yellow-400 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-gray-900 transition-all shadow-lg hover:shadow-yellow-500/50"
            >
              Learn More About Me!!
            </Link>
            <Link
              href={ROUTES.CONTACT}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-gray-900 font-medium shadow-lg hover:shadow-yellow-500/50 hover:scale-105 transition-transform"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-md lg:max-w-xl">
            <Image
              src="/mg.jpg"
              alt="Hero"
              width={500}
              height={800}
              className="rounded-2xl border-4 border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.4)] group-hover:scale-105 transition-transform duration-500"
            />
            
            <div className="absolute inset-0 rounded-2xl bg-yellow-400 opacity-10 group-hover:opacity-20 transition duration-500"></div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
