'use client'
import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 bg-[#66CDBA] text-white gap-10">
      
      {/* Left: Text */}
      <div className="max-w-xl">
       <h6 className="text-2xl right:text"> WELCOME TO ACADEMIA  </h6>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Beast Online Education Expertise
        </h1>
        <p className="text-lg mb-8 text-white/90">
          Flexible online courses designed for your success.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-[#24ae95] text-[#ebf2f4] font-semibold square-full hover:bg-gray-200 transition">
            GET STARTED NOW
          </button>
          <button className="px-6 py-3 border border-white  text-[#0ea388] font-semibold square-full hover:bg-white/10 bg-[#ebf2f4]">
            VIEW COURSE
          </button>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/monday.png"
          alt="Hero Illustration"
          width={600}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </section>
  )
}


