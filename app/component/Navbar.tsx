'use client'
import React from 'react'

export default function Navbar() {
  return (
   
    <main className="min-h-screen bg-sky-300 text-white">
      
      {/* Top-left: Academia logo/title */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold">Academia</h1>
      </div>

      {/* Horizontal Navbar */}
      <header className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 flex items-center justify-between">
        
        {/* Nav Links */}
        <nav className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">All Courses</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Team</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Journal</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>

        {/* Get Certificate Button */}
        <button className="bg-cyan-800 text-white p-4 rounded">
          Get Certificate
        </button>
      </header>

    </main>
  );
}