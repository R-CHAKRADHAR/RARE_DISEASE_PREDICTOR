import { FileText, Brain, Layout } from "lucide-react"

export default function About() {
  return (
  <div className="space-y-12">
    {/* Section Heading */}
    <div className="text-center space-y-3">
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
        About This Project
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto text-lg">
        This prototype showcases a clean separation between a modern React frontend
        and a FastAPI backend for AI-driven rare disease prediction. All training
        and inference live on the server, while the browser provides a smooth,
        interactive user experience.
      </p>
    </div>

    {/* Info Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="p-6 bg-white shadow-md rounded-2xl flex flex-col items-start gap-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
        <FileText className="text-brand-600 w-8 h-8" />
        <h3 className="font-semibold text-lg">Supported Formats</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Images (JPG/PNG), documents (PDF), and tables (CSV/XLSX).
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 bg-white shadow-md rounded-2xl flex flex-col items-start gap-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
        <Brain className="text-brand-600 w-8 h-8" />
        <h3 className="font-semibold text-lg">Backend Model</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Server converts files into feature vectors and feeds a trained deep learning model.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 bg-white shadow-md rounded-2xl flex flex-col items-start gap-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
        <Layout className="text-brand-600 w-8 h-8" />
        <h3 className="font-semibold text-lg">Frontend Features</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Drag-and-drop upload, results history, interactive stats, and real-time toasts.
        </p>
      </div>
    </div>
  </div>
);

}
