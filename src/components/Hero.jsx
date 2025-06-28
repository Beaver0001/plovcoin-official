import React from "react"

function Hero() {
  return (
    <section className="bg-[#1a0a05] text-yellow-100 py-20 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">PlovCoin</h1>
      <p className="text-lg md:text-xl mb-8">Горячий мемкоин с ароматом хайпа</p>
      <div className="flex justify-center gap-4">
        <a href="#" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-500 transition">Купить $PLOV</a>
        <a href="#" className="bg-transparent border border-yellow-400 text-yellow-400 font-bold px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition">Whitepaper</a>
      </div>
    </section>
  )
}

export default Hero
