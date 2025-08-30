export default function FAQ() {
  const faqs = [
    {
      q: "What is this app?",
      a: "It’s an AI-powered rare disease prediction tool that analyzes uploaded files to give quick insights."
    },
    {
      q: "Is my data secure?",
      a: "Yes. Your files are processed securely and are not shared with third parties."
    },
    {
      q: "Which formats are supported?",
      a: "Currently we support images (JPG/PNG), PDFs, and tables (CSV/XLSX)."
    },
  ]

  return (
    <div className="space-y-4">
  {faqs.map((f, i) => (
    <details key={i} className="group border rounded-xl p-4 bg-white shadow-sm">
      <summary className="cursor-pointer font-medium flex items-center gap-2">
        <span className="text-brand-600">❓</span>
        {f.q}
      </summary>
      <p className="mt-2 text-slate-600 group-open:animate-fadeIn">
        💡 {f.a}
      </p>
    </details>
  ))}
</div>

  )
}
