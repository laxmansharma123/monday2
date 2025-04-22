'use client'

import { UserCircle, CalendarDays, MessageSquare } from 'lucide-react'

const blogs = [
  {
    title: 'Build Your Dream Software & Engineer Career',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a magna vel purus.',
    image: '/blog.jpeg',
    date: 'Jan 12, 2001',
    author: 'Admin',
    comments: 12,
  },
  {
    title: '10 Tips to Succeed in UI/UX Design',
    description: 'Design your future by following these practical, real-world design career tips.',
    image: '/blog1.jpeg',
    date: 'Feb 5, 2023',
    author: 'Admin',
    comments: 8,
  },
  {
    title: 'Learn Web Development Faster Than You Think',
    description: 'Explore key principles, tools, and resources to become a full-stack developer quickly.',
    image: '/blog2.jpeg',
    date: 'Mar 15, 2024',
    author: 'Admin',
    comments: 5,
  },
]

export default function RecentBlog() {
  return (
    <section className="bg-white py-20 px-6 text-black text-center">
     <p className="text-1xl mb-3.5 text-[#176177]"> OUR BLOG</p>
      <h2 className="text-3xl font-bold mb-12 text-bg-black">RECENT FROM BLOG</h2>

      <div className="grid md:grid-cols-3 gap-13 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-md square-xl overflow-hidden hover:shadow-lg transition flex flex-col">
            {/* Image top half */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            {/* Info section */}
            <div className="p-6 flex flex-col gap-3 text-left">
              {/* Admin row */}
              <div className="flex items-center gap-4 text-sm text-[#176177] font-medium">
                <div className="flex items-center gap-3">
                  <UserCircle size={16} />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarDays size={16} />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare size={16} />
                  <span>{blog.comments}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold">{blog.title}</h3>

              {/* Paragraph */}
              <p className="text-sm text-gray-600">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
