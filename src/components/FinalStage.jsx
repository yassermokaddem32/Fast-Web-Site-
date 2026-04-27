import TeamCard from './TeamCard'

const MEDALS = ['gold', 'silver', 'bronze', null]

export default function FinalStage({ teams }) {
 if (!Array.isArray(teams)) return null;
  const finalTeams = teams
    .filter((t) => t.stage === 'final')
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)

  return (
    <div className="max-w-2xl mx-auto animate-fade-in w-full px-1">
      <div className="flex justify-center mb-4 sm:mb-6">
        <div className="inline-block bg-black border-2 border-white rounded-xl px-5 py-2 text-center w-fit shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          <h2 className="text-white font-bold text-base sm:text-lg">
            Final standings
          </h2>
        </div>
      </div>
      <div className="space-y-2 sm:space-y-3 w-full">
        {finalTeams.map((team, i) => (
          <TeamCard
            key={team.id}
            team={team}
            rank={i + 1}
            medal={MEDALS[i] || null}
          />
        ))}
        {finalTeams.length === 0 && (
          <p className="text-white/60 text-center">No teams in the final.</p>
        )}
      </div>
    </div>
  )
}
