'use client'

export default function NewsletterSection() {
  return (
    <section className="bg-[#176177] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white">
        
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Newsletter – stay tuned and get the latest update
          </h2>
          <p className="text-sm text-white/80">
            Far away,behind the word mountains
          </p>
        </div>

        {/* Right Side - Email Input */}
        <div className="flex-1 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full h-9 px-10 square-md bg-[#e4ecee]  text-black placeholder-black-500 outline-none"
          />
        </div>
      </div>
    </section>
  )
}
