import { Activity, Database, FileText, RefreshCw } from "lucide-react"

export default function Home({ onStartPredict }) {
  const stats = [
    { label: "Total Predictions", value: "—", note: "(session)", icon: <Activity className="text-brand-600" /> },
    { label: "Model Version", value: "1.0.0", icon: <Database className="text-brand-600" /> },
    { label: "Supported Formats", value: "JPG, PNG, PDF, CSV, XLSX", icon: <FileText className="text-brand-600" /> },
    { label: "Last Updated", value: "—", icon: <RefreshCw className="text-brand-600" /> }
  ]

  return (
  <div className="space-y-16">
    {/* Hero Section */}
    <section className="text-center py-20 bg-gradient-to-r from-brand-50 via-white to-purple-50 rounded-3xl shadow-lg relative overflow-hidden">
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
        AI-Powered Rare Disease Predictor
      </h2>
      <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
        Upload medical scans or clinical files and get instant predictions powered
        by advanced deep learning models. <br />
        <span className="text-slate-700 font-medium">Fast, accurate, and secure.</span>
      </p>
      <button
        onClick={onStartPredict}
        className="mt-10 px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-brand-600 to-purple-600 text-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        Start Predicting
      </button>
    </section>

    {/* Stats Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((s, i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-2xl shadow-md flex items-center gap-4 hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-brand-50 to-purple-50 rounded-xl text-brand-600">
            {s.icon}
          </div>
          <div>
            <div className="text-sm text-slate-500">{s.label}</div>
            <div className="text-xl font-bold">{s.value}</div>
            {s.note && (
              <div className="text-xs text-slate-400 mt-1">{s.note}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
}
