"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ROUTES } from "../routes/page";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        
        <Link href={ROUTES.HOME} className="flex items-center">
          <Image src="/logo.avif" alt="Logo" width={40} height={40} />
          <span className="ml-2 text-xl font-bold">MyApp</span>
        </Link>

        
        <div className="hidden md:flex space-x-6">
          <Link href={ROUTES.HOME} className="hover:text-yellow-400">Home</Link>
          <Link href={ROUTES.ABOUT} className="hover:text-yellow-400">About</Link>
          <Link href={ROUTES.CONTACT} className="hover:text-yellow-400">Contact</Link>
        </div>

        
        <button
          className="md:hidden p-2 rounded hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-4">
          <Link href={ROUTES.HOME} className="hover:text-yellow-400">Home</Link>
          <Link href={ROUTES.ABOUT} className="hover:text-yellow-400">About</Link>
          <Link href={ROUTES.CONTACT} className="hover:text-yellow-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}
