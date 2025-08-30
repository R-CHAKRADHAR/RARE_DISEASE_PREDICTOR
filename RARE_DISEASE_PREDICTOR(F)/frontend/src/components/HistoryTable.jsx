export default function HistoryTable({rows}){
  if (!rows?.length) return null
  return (
    <div className="card p-6">
      <div className="text-lg font-semibold mb-3">Prediction History</div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              <th className="py-2">Time</th>
              <th className="py-2">File</th>
              <th className="py-2">Disease</th>
              <th className="py-2">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=> (
              <tr key={i} className="border-t">
                <td className="py-2 text-slate-500">{new Date(r.time).toLocaleString()}</td>
                <td className="py-2">{r.filename}</td>
                <td className="py-2">{r.disease}</td>
                <td className="py-2">{(r.confidence*100).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
