import { useState, useRef } from 'react'
import { Upload, X } from 'lucide-react'

export default function FileUpload({onFile}){
  const [file, setFile] = useState(null)
  const inputRef = useRef(null)

  const onDrop = (e) => {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    if (f){ setFile(f); onFile?.(f) }
  }
  const onPick = (e) => {
    const f = e.target.files?.[0]
    if (f){ setFile(f); onFile?.(f) }
  }

  return (
    <div>
      {!file ? (
        <div onDrop={onDrop} onDragOver={(e)=>e.preventDefault()}
             className="card p-8 grid place-content-center text-center cursor-pointer"
             onClick={()=>inputRef.current?.click()}>
          <Upload className="mx-auto mb-3" />
          <div className="font-medium">Drag & drop your file here</div>
          <div className="text-sm text-slate-500">JPG, PNG, PDF, CSV, XLSX</div>
          <input ref={inputRef} type="file" accept=".jpg,.jpeg,.png,.pdf,.csv,.xlsx"
                 className="hidden" onChange={onPick} />
        </div>
      ) : (
        <div className="card p-5 flex items-center justify-between">
          <div>
            <div className="font-medium">{file.name}</div>
            <div className="text-xs text-slate-500">{(file.size/1024).toFixed(1)} KB</div>
          </div>
          <button className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200"
                  onClick={()=>{ setFile(null); onFile?.(null) }}>
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  )
}
