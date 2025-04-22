import './globals.css'
import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Footer from "./components/Footer"

export const metadata = {
  title: 'Academia',
  description: 'Hero Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-white">

        {/* ACADEMIA + SOCIAL ICONS */}
        <div className="flex items-center justify-between px-10 pt-6 pb-3 bg-[#66CDBA]">
          <div className="text-3xl font-bold">Academia</div>

          {/* Social Icons */}
          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-yellow-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* NAVBAR */}
        <header className="w-full px-10 py-4 flex items-center justify-between bg-[#66CDBA]/80 backdrop-blur-md">
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Courses</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Team</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Journal</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>

          <button className="ml-4S px-5 py-2 bg-[#66cdb5] text-black Square-full font-semibold hover:bg-yellow-300 transition">
            Get Certificate
          </button>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
