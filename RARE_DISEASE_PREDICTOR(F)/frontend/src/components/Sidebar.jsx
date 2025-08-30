import { Home, Upload, Info } from 'lucide-react'

const Item = ({active, icon:Icon, label, onClick}) => (
  <button onClick={onClick}
    className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-left transition ${active? 'bg-brand-50 text-brand-700' : 'hover:bg-slate-100'}`}>
    <Icon size={18} />
    <span className="font-medium">{label}</span>
  </button>
)

export default function Sidebar({route, onNavigate}){
  return (
    <aside className="hidden md:block w-64 p-4 border-r border-slate-200 bg-white">
      <div className="mb-6">
        <div className="w-12 h-12 rounded-full bg-brand-600 text-white grid place-content-center text-lg font-bold">RD</div>
        <div className="mt-3">
          <div className="text-lg font-semibold">Rare Disease</div>
          <div className="text-slate-500 text-sm">Predictor Dashboard</div>
        </div>
      </div>
      <nav className="space-y-2">
        <Item active={route==='home'} icon={Home} label="Home" onClick={()=>onNavigate('home')} />
        <Item active={route==='predict'} icon={Upload} label="Predict" onClick={()=>onNavigate('predict')} />
        <Item active={route==='about'} icon={Info} label="About" onClick={()=>onNavigate('about')} />
      </nav>
      <div className="mt-10 text-xs text-slate-500">
        <p>Version 1.0 • Prototype</p>
        <p className="mt-2">For demo only — not for clinical use</p>
      </div>
    </aside>
  )
}
