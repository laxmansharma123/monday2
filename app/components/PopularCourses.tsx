'use client'

import { Star } from 'lucide-react'

const courses = [
  {
    title: "Introducing to Software Engineering",
    rating: 4.5,
    instructor: "Alex Morgan",
    price: "$49.99 all courses / month",
    img: "/girl2.jpeg",
  },
  {
    title: "Enhancing Adobe Photoshop CC 2020 Skills",
    rating: 4.7,
    instructor: "Sarah Johnson",
    price: "$39.99 all courses / month",
    img: "/girlimage.jpeg",
  },
  {
    title: "HTML, CSS & JavaScript for Web Developers",
    rating: 4.9,
    instructor: "John Carter",
    price: "$59.99 all courses / month",
    img: "/handimage.jpeg",
  },
]

export default function PopularCourses() {
  return (
    <section className="bg-white py-20 px-6 text-black text-center">
      <p className="text-1xl mb-3.5 text-[#66CDBA]">  OUR COURSES</p>
      <h2 className="text-3xl font-bold mb-12">Explore Our Popular Online Courses</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start justify-between w-full border border-gray-200"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">{course.title}</h3>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`mr-1 ${i < Math.floor(course.rating) ? 'text-[#66CDBA]' : 'text-gray-300'}`}
                  fill={i < Math.floor(course.rating) ? '#176177' : 'none'}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">({course.rating})</span>
            </div>

            {/* Instructor Info */}
            <div className="flex items-center mb-2">
              <img
                src={course.img}
                alt="Instructor"
                className="w-10 h-10 rounded-full mr-3"
              />
              <p className="text-sm bg-gray-100font-medium">{course.instructor}</p>
            </div>

            {/* Price */}
            <p className="text-sm bg-gray-100 text-[#66CDBA] mb-6">{course.price}</p>

            {/* Button */}
            <div className="w-full flex justify-center">
              <button className="border border-[#66CDBA] text-[#66CDBA] font-semibold py-2 px-32 square-full hover:bg-[#66CDBA] hover:text-white transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
