"use client";

import { ROUTES } from "./routes/page";
import Image from "next/image";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-6 sm:px-20">
      
      
      <section className="text-center sm:text-left max-w-4xl mb-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
          Welcome to <span className="text-yellow-400">MyApp</span> 🚀
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-300">
          Build modern and responsive web applications using Next.js, TypeScript, and TailwindCSS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <Link
            href={ROUTES.ABOUT}
            className="px-6 py-3 rounded-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition font-medium"
          >
            Learn More
          </Link>
        </div>
      </section>

      
      <section className="flex justify-center w-full">
        <Image
          src="/hero.jpg"
          alt="Hero"
          width={500}
          height={400}
          className="rounded-lg shadow-2xl"
        />
      </section>

      
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 w-full max-w-4xl text-center">
        <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-yellow-400">10+</h2>
          <p className="text-gray-300 mt-2">Projects Completed</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-yellow-400">5+</h2>
          <p className="text-gray-300 mt-2">Years of Experience</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-yellow-400">3</h2>
          <p className="text-gray-300 mt-2">Live Projects</p>
        </div>
      </section>
    </div>
  );
}
