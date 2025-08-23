"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-6 sm:px-20">
      
      {/* About Heading */}
      <h1 className="text-5xl font-extrabold mb-6 text-yellow-400">About Me</h1>

      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 max-w-4xl">
        {/* Profile Image */}
        <Image
          src="/Abbas.jpeg" // make sure your image is in public folder
          alt="Abbas Omer"
          width={200}
          height={200}
          className="rounded-full shadow-2xl"
        />

        {/* Profile Info */}
        <div className="sm:text-left text-center">
          <h2 className="text-3xl font-bold mb-2">Abbas Omer</h2>
          <p className="text-gray-300 mb-4">Full-Stack Developer from Sudan</p>
          <p className="text-gray-300 mb-2">
            Passionate about building responsive, scalable, and user-friendly web applications. 
            Skilled in <span className="text-yellow-400">JavaScript, React, Node.js, TailwindCSS, HTML, CSS, MongoDB</span>, and more.
          </p>
          <p className="text-gray-300">
            I enjoy solving problems through code and continuously learning new technologies to improve my craft.
          </p>
        </div>
      </div>

      {/* Optional Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 w-full max-w-4xl text-center">
        <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-yellow-400">5+</h2>
          <p className="text-gray-300 mt-2">Projects Completed</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-yellow-400">3+</h2>
          <p className="text-gray-300 mt-2">Years Experience</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-yellow-400">1</h2>
          <p className="text-gray-300 mt-2">Full Portfolio</p>
        </div>
      </div>
    </div>
  );
}
