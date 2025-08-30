export default function ResultsCard({result}){
  if (!result) return null
  const entries = Object.entries(result?.probs || {})
    .sort((a,b)=>b[1]-a[1])
    .slice(0,5)
  return (
    <div className="card p-6">
      <div className="text-lg font-semibold">Prediction Result</div>
      <div className="mt-3 text-slate-700">
        <div className="text-2xl font-bold">{result.disease}</div>
        <div className="text-sm text-slate-500 mt-1">Confidence: {(result.confidence*100).toFixed(2)}%</div>
        <div className="text-xs text-slate-400 mt-1">File: {result.filename}</div>
      </div>
      {entries.length>0 && (
        <div className="mt-5">
          <div className="text-sm font-medium mb-2">Top probabilities</div>
          <ul className="space-y-2">
            {entries.map(([k,v])=> (
              <li key={k} className="flex items-center gap-3">
                <div className="w-28 text-slate-600 text-sm">{k}</div>
                <div className="flex-1 bg-slate-100 rounded-xl overflow-hidden">
                  <div className="h-2 bg-brand-500" style={{width: `${(v*100).toFixed(2)}%`}} />
                </div>
                <div className="w-16 text-right text-sm">{(v*100).toFixed(1)}%</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
