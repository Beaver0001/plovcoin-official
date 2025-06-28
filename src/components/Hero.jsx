import React from "react"
import bg from "../assets/hero-meme-bg.png"

function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-end pb-20 px-4 text-center text-yellow-100"
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <div className="flex flex-col sm:flex-row gap-6 mt-8">
        <a
          href="#"
          className="bg-yellow-400 text-black text-lg font-bold px-8 py-4 rounded-full shadow hover:bg-yellow-500 transition"
        >
          BUY $PLOV
        </a>
        <a
          href="#"
          className="bg-yellow-400 text-black text-lg font-bold px-8 py-4 rounded-full shadow hover:bg-yellow-500 transition"
        >
          WHITEPAPER
        </a>
      </div>
    </section>
  )
}
// trigger rebuild on Vercel

export default Hero
