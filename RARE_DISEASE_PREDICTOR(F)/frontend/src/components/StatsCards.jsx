export default function StatsCards({stats}){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="card p-5">
          <div className="text-slate-500 text-sm">{s.label}</div>
          <div className="text-2xl font-semibold mt-1">{s.value}</div>
          {s.note && <div className="text-xs text-slate-400 mt-1">{s.note}</div>}
        </div>
      ))}
    </div>
  )
}
