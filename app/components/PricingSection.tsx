'use client'

const pricingPlans = [
  {
    title: 'BASIC PLAN',
    price: 49,
    description: 'Perfect for individuals just starting out with basic access and learning tools.',
  },
  {
    title: 'BEGGINER PLAN Plan',
    price: 89,
    description: 'Includes essential features for early learners and small projects.',
  },
  {
    title: 'PREMIUM PLANN',
    price: 129,
    description: 'Get everything in the basic plan plus extra support and tools.',
  },
  {
    title: ' UNLIMITED PLAN',
    price: 199,
    description: 'Access to all features, premium content, and personalized guidance.',
  },
]

export default function PricingSection() {
  return (
    <section className="bg-white py-20 px-6 text-black text-center">
      <p className="text-1xl mb-3.5 text-[#176177]"> OUR PRICING</p>
      <h2 className="text-3xl font-bold mb-12 text-[#000303]">PRICING & PACKAGE</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white aspect-square rounded-xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg transition"
          >
            {/* Title */}
            <h3 className="text-xl font-bold">{plan.title}</h3>

            {/* Price */}
            <div className="flex items-start justify-center">
              <span className="text-sm text-black mt-1 mr-1">$</span>
              <span className="text-3xl font-bold text-[#176177]">{plan.price}K</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              {plan.description}
            </p>

            {/* Button */}
            <button className="mt-4 w-full bg-white text-[#176177] border-2 border-[#176177] font-semibold py-2 px-6 hover:bg-gray-50 transition">
  GET STARTED
</button>

          </div>
        ))}
      </div>
    </section>
  )
}


