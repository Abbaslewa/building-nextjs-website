"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-6 sm:px-20">
      
      <h1 className="text-5xl font-extrabold mb-6 text-yellow-400">Contact Us</h1>
      <p className="text-lg sm:text-xl mb-12 text-gray-300 text-center">
        We’d love to hear from you! Reach out via email or phone, and we’ll get back to you promptly.
      </p>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl text-center sm:text-left">
        <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">Email</h2>
          <p className="text-gray-300">abbasomerhassn@gmail.com</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">Phone</h2>
          <p className="text-gray-300">+1 (123) 456-7890</p>
        </div>
      </div>

      
      <div className="mt-12 w-full max-w-2xl">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32 resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-yellow-400 text-gray-900 font-medium hover:bg-yellow-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
