'use client'

const students = [
  {
    name: 'ROGER SCOTT',
    title: 'Marketing Manager',
    image: '/men.jpeg',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in lacus nec sapien varius tristique.',
  },
  {
    name: 'SARAH THOMAS',
    title: 'UX Designer',
    image: '/men2.jpeg',
    quote: 'Design is not just what it looks like and feels like. Design is how it works.',
  },
  {
    name: 'JASON LEE',
    title: 'Web Developer',
    image: '/men3.jpeg',
    quote: 'Web development is the art of turning imagination into interactive experience.',
  },
]

export default function SuccessfulStudents() {
  return (
    <section className="bg-white py-20 px-6 text-black text-center">
      <p className="text-1xl mb-3.5 text-[#176177]"> TESTIMONIAL</p>
      <h2 className="text-3xl font-bold mb-12">OUR SUCCESSFUL STUDENTS</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {students.map((student, index) => (
  <div
    key={index}
    className="bg-white square-xl p-6 shadow-md flex flex-col gap-4 items-start text-left hover:shadow-lg transition"
  >
    <div className="flex items-center gap-4">
      <img
        src={student.image}
        alt={student.name}
        className="w-14 h-14 rounded-full object-cover"
      />
      <div>
        <h3 className="text-lg font-bold">{student.name}</h3>
        <p className="text-sm text-gray-600">{student.title}</p>
      </div>
    </div>

    <p className="text-sm text-gray-700 leading-relaxed">
      "{student.quote}"
    </p>
  </div>
))}

      </div>
    </section>
  )
}
