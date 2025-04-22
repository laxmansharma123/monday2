'use client'

import Image from 'next/image'
import { Book, BadgeCheck, Users } from 'lucide-react'

export default function BenefitsSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-16 text-black flex flex-col md:flex-row gap-10 items-center justify-center">
      
      {/* Left: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/girl2.jpeg"
          alt="Learning Girl"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <p className="text-sm font-semibold text-[#24ab92]">LEARN ANYTHING</p>
        <h2 className="text-3xl font-bold">Benefits About Online Learning Expertise</h2>

        {/* Benefit 1 */}
        <div className="flex items-start gap-4 p-4 bg-[#24ab92] text-white rounded-lg shadow-md">
          <Book className="mt-1" />
          <div>
            <h3 className="font-bold ">Online Courses</h3>
            <p className="text-sm   opacity-90">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="flex items-start gap-4 p-4 bg-gray-100 text-black rounded-lg shadow-sm">
          <BadgeCheck className="mt-1 text-[#176177]" />
          <div>
            <h3 className="font-bold">Earn A Certificates</h3>
            <p className="text-sm opacity-70">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="flex items-start gap-4 p-4 bg-gray-100 text-black rounded-lg shadow-sm">
          <Users className="mt-1 text-[#176177]" />
          <div>
            <h3 className="font-bold">Learn with Expert</h3>
            <p className="text-sm opacity-70">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
