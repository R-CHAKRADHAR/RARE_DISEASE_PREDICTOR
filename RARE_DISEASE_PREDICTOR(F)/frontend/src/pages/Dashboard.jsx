import { useState, useEffect } from "react"
import { Activity, Clock, FileText } from "lucide-react"

export default function Dashboard() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    // TODO: Fetch from backend when ready, right now mock data
    setHistory([
      { id: 1, file: "scan_1.png", result: "Positive", confidence: "87%", time: "2h ago" },
      { id: 2, file: "scan_2.png", result: "Negative", confidence: "92%", time: "1d ago" },
      { id: 3, file: "patient_data.xlsx", result: "Positive", confidence: "78%", time: "3d ago" },
    ])
  }, [])

  return (
  <div className="space-y-12">
    {/* Header */}
    <div className="text-center space-y-2">
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
        Patient Dashboard
      </h2>
      <p className="text-slate-600 text-lg">
        Track your past predictions and insights at a glance.
      </p>
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="p-6 bg-white shadow-md rounded-2xl flex items-center gap-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
        <Activity className="text-brand-600 w-8 h-8" />
        <div>
          <div className="text-sm text-slate-500">Total Predictions</div>
          <div className="text-xl font-bold">{history.length}</div>
        </div>
      </div>

      <div className="p-6 bg-white shadow-md rounded-2xl flex items-center gap-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
        <FileText className="text-brand-600 w-8 h-8" />
        <div>
          <div className="text-sm text-slate-500">Files Processed</div>
          <div className="text-xl font-bold">{history.map(h => h.file).length}</div>
        </div>
      </div>

      <div className="p-6 bg-white shadow-md rounded-2xl flex items-center gap-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
        <Clock className="text-brand-600 w-8 h-8" />
        <div>
          <div className="text-sm text-slate-500">Last Prediction</div>
          <div className="text-xl font-bold">{history[0]?.time || "—"}</div>
        </div>
      </div>
    </div>

    {/* History Table */}
    <div className="p-6 bg-white shadow-md rounded-2xl overflow-x-auto">
      <h3 className="font-semibold text-lg mb-4">Prediction History</h3>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-left text-slate-500 border-b">
            <th className="pb-3">File</th>
            <th className="pb-3">Result</th>
            <th className="pb-3">Confidence</th>
            <th className="pb-3">Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map(h => (
            <tr
              key={h.id}
              className="border-b last:border-0 hover:bg-slate-50 transition"
            >
              <td className="py-3">{h.file}</td>
              <td
                className={`py-3 font-medium ${
                  h.result === "Positive" ? "text-red-600" : "text-green-600"
                }`}
              >
                {h.result}
              </td>
              <td className="py-3">{h.confidence}</td>
              <td className="py-3">{h.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

}
