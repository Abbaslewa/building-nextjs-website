"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-6 sm:px-20">
      
      
      <h1 className="text-5xl font-extrabold mb-10 text-yellow-400 text-center">
        About Me
      </h1>

      
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 max-w-5xl">
       
        <div className="relative group">
          <Image
            src="/Abbas.jpg" 
            alt="Abbas Omer"
            width={280}
            height={280}
            className="rounded-full border-4 border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.5)] group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-10 group-hover:opacity-20 transition duration-500"></div>
        </div>

        
        <div className="sm:text-left text-center max-w-lg">
          <h2 className="text-4xl font-bold mb-2">Abbas Omer</h2>
          <p className="text-lg text-gray-300 mb-6">
            <span className="text-yellow-400">Full-Stack Developer</span> from Sudan 🇸🇩
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Passionate about building responsive, scalable, and user-friendly web applications. 
            Skilled in <span className="text-yellow-400">JavaScript, React, Next.js, Node.js, TailwindCSS, MongoDB</span>, and more.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I love solving problems through code and continuously learning new technologies 
            to stay ahead in the ever-changing world of software development.
          </p>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 w-full max-w-4xl text-center">
        <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-400">5+</h2>
          <p className="text-gray-300 mt-2">Projects Completed</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-400">3+</h2>
          <p className="text-gray-300 mt-2">Years Experience</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-400">1</h2>
          <p className="text-gray-300 mt-2">Full Portfolio</p>
        </div>
      </div>
    </div>
  );
}
