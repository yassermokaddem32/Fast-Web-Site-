export default function TeamCard({ team, rank, status }) {
  return (
    <div className="bg-black border border-gray-700 rounded-lg px-4 py-3 flex justify-between items-center">

      <div className="flex items-center gap-4">
        <span className="text-white font-bold">
          {rank}.
        </span>

        <span className="text-white">
          {team.name}
        </span>
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

        {status === "Waiting" && (
          <span className="text-gray-400">
            Waiting
          </span>
        )}
      </div>

    </div>
  )
}