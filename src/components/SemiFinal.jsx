import TeamCard from './TeamCard'

const GROUPS = ['S1', 'S2']
const DISPLAY_LABEL = { S1: 'A', S2: 'B' }
const TOP_COUNT = 2

export default function SemiFinal({ teams }) {
 if (!Array.isArray(teams)) return null;
  const semiTeams = teams.filter((t) => t.stage === 'semi')

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
      {GROUPS.map((g) => {
        const inGroup = semiTeams
          .filter((t) => t.group === g)
          .sort((a, b) => b.score - a.score)
        return (
          <section key={g} className="animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="inline-block bg-black border-2 border-white rounded-xl px-5 py-2 text-center w-fit shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <h2 className="text-white font-bold text-base sm:text-lg">
                  Group {DISPLAY_LABEL[g]}
                </h2>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 w-full">
              {inGroup.map((team, i) => (
                <TeamCard
                  key={team.id}
                  team={team}
                  rank={i + 1}
                  highlight={i < TOP_COUNT}
                />
              ))}
              {inGroup.length === 0 && (
                <p className="text-white/60 text-sm">No teams in this bracket.</p>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}
