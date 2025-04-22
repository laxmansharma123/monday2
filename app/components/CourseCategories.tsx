'use client'

import {
  LayoutDashboard,
  Brush,
  Cpu,
  Landmark,
  Code,
  FileCode,
  HeartPulse,
  TrendingUp,
  Palette,
  Music2,
  Briefcase,
  Globe
} from 'lucide-react'

const categories = [
  { title: 'UI/UX Design', icon: LayoutDashboard, courses: 4 },
  { title: 'Art & Design', icon: Brush, courses: 6 },
  { title: 'Computer Science', icon: Cpu, courses: 5 },
  { title: 'History & Archaeology', icon: Landmark, courses: 8 },
  { title: 'Software Engineering', icon: Code, courses: 9 },
  { title: 'Information Software', icon: FileCode, courses: 7 },
  { title: 'Health & Fitness', icon: HeartPulse, courses: 3 },
  { title: 'Marketing', icon: TrendingUp, courses: 6 },
  { title: 'Graphic Design', icon: Palette, courses: 5 },
  { title: 'Music', icon: Music2, courses: 4 },
  { title: 'Business Admin', icon: Briefcase, courses: 8 },
  { title: 'Web Management', icon: Globe, courses: 6 },
]

export default function CourseCategories() {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6 text-center text-[#176177]">
      {/* Section heading */}
      <p className="text-1xl mb-3.5 text-[#176177]"> COURSES</p>
      <h2 className="text-3xl  text-black black font-bold mb-10">BROWSE OUR ONLINE COURSES</h2>

      {/* Category cards grid: 2 rows of 6 cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {categories.map((cat, index) => {
          const Icon = cat.icon
          return (
            <div
              key={index}
              className="bg-white aspect-square square-xl border border-white shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg hover:scale-[1.03] transition"


            >
              <Icon className="w-8 h-8 text-[text-[#66CDBA]] mb-3" />
              <h3 className="font-semibold text-sm mb-1">{cat.title}</h3>
              <p className="text-xs text-[#66CDBA]-500">{cat.courses} Courses</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}