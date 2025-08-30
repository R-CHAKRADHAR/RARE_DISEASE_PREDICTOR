export default function Documentation() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-brand-700">Documentation</h2>
      <p className="text-slate-600">
        Learn how to use the AI-powered rare disease predictor step by step.
      </p>

      <div className="card p-6 space-y-4">
        <h3 className="font-semibold">Getting Started</h3>
        <ol className="list-decimal list-inside space-y-2 text-slate-600">
          <li>Go to the Predict page.</li>
          <li>Upload your medical file (JPG, PNG, PDF, CSV, or XLSX).</li>
          <li>Wait for the AI model to process the data.</li>
          <li>View results with prediction confidence scores.</li>
        </ol>
      </div>

      <div className="card p-6 space-y-2">
        <h3 className="font-semibold">Supported File Types</h3>
        <p className="text-slate-600">
          The system currently supports:
        </p>
        <ul className="list-disc list-inside text-slate-500">
          <li>Images: JPG, PNG</li>
          <li>Documents: PDF</li>
          <li>Tables: CSV, XLSX</li>
        </ul>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
  {[
    "Go to the Predict page",
    "Upload your file",
    "Wait for AI to process",
    "View results"
  ].map((step, i) => (
    <div key={i} className="card p-6 flex items-start gap-4">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold">
        {i + 1}
      </div>
      <p className="text-slate-600">{step}</p>
    </div>
  ))}
</div>
    </div>
  )
}
