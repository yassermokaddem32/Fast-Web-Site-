import { useState } from 'react'

export default function App() {

  // 🔥 Change this number to control who is playing
  const CURRENT_PLAYING = 3

  const teams = [
    { id: 1, name: "TESLA" },
    { id: 2, name: "SPARK" },
    { id: 3, name: "RAMUS" },
    { id: 4, name: "K7" },
  ]

  const getStatus = (index) => {
    const position = index + 1

    if (position < CURRENT_PLAYING) return "finished"
    if (position === CURRENT_PLAYING) return "playing"
    if (position === CURRENT_PLAYING + 1) return "next"
    return "waiting"
  }

  return (
    <div
      className="min-h-screen relative text-white"
      style={{ background: 'linear-gradient(135deg, #000000, #0f0f0f)' }}
    >
      <div className="animated-bg" />
      <div className="animated-bg-particles" />

      <div className="relative z-10">

        <header className="pt-8 pb-6 text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-red-600">F</span>-AST FINAL
          </h1>
          <p className="text-white/70 mt-2">Final Stage</p>
        </header>

        <main className="max-w-3xl mx-auto px-4">

          <div className="space-y-4">
            {teams.map((team, index) => {
              const status = getStatus(index)

              return (
                <div
                  key={team.id}
                  className="bg-black border border-gray-700 rounded-xl px-6 py-4 flex justify-between items-center shadow-lg"
                >
                  <div>
                    <span className="text-gray-400 mr-3">{index + 1}.</span>
                    {team.name}
                  </div>

                  {status === "finished" && (
                    <span className="text-blue-400 font-semibold">
                      ✔ Finished
                    </span>
                  )}

                  {status === "playing" && (
                    <span className="text-green-400 font-semibold">
                      ● Playing Now
                    </span>
                  )}

                  {status === "next" && (
                    <span className="text-yellow-400 font-semibold">
                      ● Playing Next
                    </span>
                  )}

                  {status === "waiting" && (
                    <span className="text-gray-400">
                      Waiting
                    </span>
                  )}
                </div>
              )
            })}
          </div>

        </main>

      </div>
    </div>
  )
}