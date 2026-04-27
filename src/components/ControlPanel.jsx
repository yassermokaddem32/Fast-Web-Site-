import { useState } from 'react'

const GROUPS = ['A', 'B', 'C', 'D']

export default function ControlPanel() {
  const [currentIndex, setCurrentIndex] = useState(
    JSON.parse(localStorage.getItem("currentIndex")) || {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
    }
  )

  const nextTeam = (group) => {
    const updated = {
      ...currentIndex,
      [group]: currentIndex[group] + 1
    }

    setCurrentIndex(updated)
    localStorage.setItem("currentIndex", JSON.stringify(updated))
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-500">
        Control Panel
      </h1>

      <div className="space-y-6">
        {GROUPS.map(g => (
          <div key={g} className="flex justify-between items-center border border-gray-700 p-4 rounded-lg">
            <span>Group {g}</span>
            <button
              onClick={() => nextTeam(g)}
              className="bg-red-600 px-4 py-2 rounded"
            >
              ▶ Next Team
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}