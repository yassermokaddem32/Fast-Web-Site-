// 🔥 QUARTER MODE (ONLY 2 GROUPS)
const GROUPS = ['A', 'B']


// 🔥 عدل هنا فقط (1 = أول فريق يلعب)
const CURRENT_PLAYING = {
  A: 5,
  B: 5,
}

export default function GroupStage({ teams }) {

  return (
    <div className="grid md:grid-cols-2 gap-8">

      {GROUPS.map((g) => {
        const inGroup = teams.filter(t => t.group === g)

        // تحويل من رقم بشري (1 يبدأ) إلى index (0 يبدأ)
        const currentIndex = CURRENT_PLAYING[g] - 1

        return (
          <div key={g} className="border border-gray-700 p-4 rounded-xl">

            <h2 className="text-xl text-red-500 font-bold mb-4">
              Semi Final - Group {g}
            </h2>

            {inGroup.map((team, i) => {

              let status = "Waiting"

              if (i < currentIndex) status = "Finished"
              else if (i === currentIndex) status = "Playing Now"
              else if (i === currentIndex + 1) status = "Playing Next"

              return (
                <div
                  key={team.id}
                  className="bg-black border border-gray-700 rounded-lg px-4 py-3 flex justify-between items-center mb-2"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-bold">{i + 1}.</span>
                    <span>{team.name}</span>
                  </div>

                  <div>
                    {status === "Playing Now" && (
                      <span className="text-green-400 font-semibold">
                        🟢 Playing Now
                      </span>
                    )}

                    {status === "Playing Next" && (
                      <span className="text-yellow-400 font-semibold">
                        🟡 Playing Next
                      </span>
                    )}

                    {status === "Finished" && (
                      <span className="text-blue-400 font-semibold">
                        ✔ Finished
                      </span>
                    )}

                    {status === "Waiting" && (
                      <span className="text-gray-400">
                        Waiting
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}