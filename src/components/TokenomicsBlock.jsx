import React from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "🥘 Airdrops", value: 38 },
  { name: "🧄 Liquidity", value: 22 },
  { name: "🔥 Marketing", value: 13 },
  { name: "🍚 DAO / Treasury", value: 10 },
  { name: "👨‍🍳 Команда", value: 10 },
  { name: "🎁 Резерв", value: 7 }
]

const COLORS = ["#facc15", "#f97316", "#ef4444", "#10b981", "#6366f1", "#eab308"]

function TokenomicsBlock() {
  return (
    <section className="bg-[#1a0a05] text-yellow-100 py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Tokenomics</h2>
      <div className="max-w-xl mx-auto">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={110}
              labelLine={false}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-8 text-sm text-yellow-300 leading-relaxed">
          Total Supply: 13 013 003 000 $PLOV<br />
          Mint Address:{" "}
          <a
            href="https://solscan.io/token/B4LhtMwbKh8D1nfj7dE6FefKpg7U2qkbYC371DBcJq9x"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-yellow-200 hover:text-white"
          >
            B4LhtMwbKh8D1nfj7dE6FefKpg7U2qkbYC371DBcJq9x
          </a>
          <br />
          Mint authority: отключена для доверия — казан запечатан!
        </div>
      </div>
    </section>
  )
}

export default TokenomicsBlock
