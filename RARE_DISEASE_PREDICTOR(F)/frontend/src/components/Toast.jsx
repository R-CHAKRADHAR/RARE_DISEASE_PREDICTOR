import { useEffect, useState } from 'react'

let pushFn = null
export const pushToast = (msg, type='info') => pushFn?.({msg, type, id: crypto.randomUUID()})

export default function Toast(){
  const [toasts, setToasts] = useState([])
  useEffect(()=>{ pushFn = (t)=>setToasts(prev=>[...prev, t]); return ()=>{ pushFn=null } },[])
  useEffect(()=>{
    if(!toasts.length) return
    const timers = toasts.map(t => setTimeout(()=> {
      setToasts(prev => prev.filter(x=>x.id!==t.id))
    }, 4000))
    return ()=> timers.forEach(clearTimeout)
  }, [toasts])
  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      {toasts.map(t=> (
        <div key={t.id} className={`px-4 py-3 rounded-2xl shadow-soft text-white ${t.type==='error'?'bg-red-600': t.type==='success'?'bg-emerald-600':'bg-slate-800'}`}>{t.msg}</div>
      ))}
    </div>
  )
}
