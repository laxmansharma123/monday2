'use client'

import Link from 'next/link'
import {
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
  CalendarDays,
  UserCircle,
  MapPin,
  Phone,
  Mail
} from 'lucide-react'

export default function Footer() {
  const exploreLinks = [
    { label: 'About', href: '/about' },
    { label: 'Service', href: '/service' },
    { label: 'Courses', href: '/courses' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const recentPosts = [
    {
      img: '/ladki.jpeg',
      date: 'Jan 18, 2003',
      author: 'Admin',
    },
    {
      img: '/ladki2.jpeg',
      date: 'Feb 12, 2004',
      author: 'Admin',
    },
    {
      img: '/ladki3.jpeg',
      date: 'Mar 5, 2005',
      author: 'Admin',
    },
  ]

  return (
    <footer className="bg-gray-100 text-black pt-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* 1. Branding + Social Icons */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Academia</h2>
          <p className="text-sm mb-4">
            A platform to build your career and sharpen your skills with top educators and resources.
          </p>
          <div className="flex gap-4 text-[#176177]">
            <Facebook className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
            <Twitter className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
            <Instagram className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* 2. Explore Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.label} className="flex items-center gap-2 text-black-700 hover:text-[#176177] cursor-pointer">
                <ArrowRight size={16} />
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Recent Posts */}
        <div>
          <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
          {recentPosts.map((post, idx) => (
            <div key={idx} className="flex items-start gap-3 mb-4">
              <img
                src={post.img}
                alt={`Post `}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="text-sm space-y-1">
                <div className="flex items-center gap-2 text-[#176177]">
                  <CalendarDays size={14} />
                  <span>{post.date}</span>
                  
                </div>
                <div className="flex items-center gap-2 text-[#176177]">
                  <UserCircle size={14} />
                  <span>{post.author}</span>
                </div>
                <p>build your dream software & engineering...</p>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Have a Question?</h3>
          <ul className="space-y-4 text-sm text-black-700">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-[#176177]" />
              123 Main Street, New York, NY 10001
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#176177]" />
              +1 (800) 123 4567
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#176177]" />
              info@academia.com
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12 pb-6">
        © {new Date().getFullYear()} Academia. All rights reserved.
      </div>
    </footer>
  )
}
