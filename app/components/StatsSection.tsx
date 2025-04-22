'use client'

import { GraduationCap, UserCheck, CalendarDays, BookOpen } from 'lucide-react'
import Image from 'next/image'

export default function StatsSection() {
  return (
    <section className="relative h-[220px] md:h-[250px] w-full">
      {/* Background Image */}
      <Image
        src="/handimage.jpeg" // your background image (replace with correct filename if different)
        alt="Stats Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center px-6">
          
          {/* Card 1 */}
          <div className="space-y-1">
            <GraduationCap className="mx-auto h-6 w-6" />
            <h2 className="text-2xl font-bold">3,000</h2>
            <p className="text-sm opacity-80">Success Stories</p>
          </div>

          {/* Card 2 */}
          <div className="space-y-1">
            <UserCheck className="mx-auto h-6 w-6" />
            <h2 className="text-2xl font-bold">320</h2>
            <p className="text-sm opacity-80">Trusted Tutors</p>
          </div>

          {/* Card 3 */}
          <div className="space-y-1">
            <CalendarDays className="mx-auto h-6 w-6" />
            <h2 className="text-2xl font-bold">1,000</h2>
            <p className="text-sm opacity-80">Schedules</p>
          </div>

          {/* Card 4 */}
          <div className="space-y-1">
            <BookOpen className="mx-auto h-6 w-6" />
            <h2 className="text-2xl font-bold">587</h2>
            <p className="text-sm opacity-80">Courses</p>
          </div>
        </div>
      </div>
    </section>
  )
}
