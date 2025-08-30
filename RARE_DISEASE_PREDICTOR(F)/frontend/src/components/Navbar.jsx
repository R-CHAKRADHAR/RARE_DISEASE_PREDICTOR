// import { ActivitySquare, Menu, Moon, Sun } from "lucide-react"
// import { useState } from "react"

// export default function Navbar({ onNavigate }) {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [dark, setDark] = useState(false)

//   return (
//     <header className={`sticky top-0 z-20 border-b border-slate-200 ${dark ? "bg-slate-900 text-white" : "bg-white/80 backdrop-blur"}`}>
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        
//         {/* Logo + Brand */}
//         <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
//           <ActivitySquare className="text-brand-600" />
//           <h1 className="text-xl font-bold text-brand-700">Rare Disease Predictor</h1>
//         </div>

//         {/* Desktop Nav Links */}
//         <nav className="hidden md:flex ml-10 gap-6 text-sm font-medium">
//           <button onClick={() => onNavigate("home")} className="hover:text-brand-600 transition">Home</button>
//           <button onClick={() => onNavigate("predict")} className="hover:text-brand-600 transition">Predict</button>
//           <button onClick={() => onNavigate("about")} className="hover:text-brand-600 transition">About</button>
//           <div className="relative group">
//             <span className="hover:text-brand-600 cursor-pointer">More ▾</span>
//             <div className="absolute hidden group-hover:block bg-white dark:bg-slate-800 shadow-lg rounded-xl mt-2 py-2 w-40 border">
//               <button className="block w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700">Documentation</button>
//               <button className="block w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700">FAQ</button>
//               <button className="block w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700">Contact</button>
//             </div>
//           </div>
//         </nav>

//         {/* Spacer + Right */}
//         <div className="ml-auto flex items-center gap-4">
//           {/* Dark Mode Toggle */}
//           <button
//             onClick={() => setDark(!dark)}
//             className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
//           >
//             {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//           </button>

//           {/* CTA Button */}
//           <button
//             onClick={() => onNavigate("predict")}
//             className="hidden md:inline-flex bg-brand-600 text-white px-4 py-2 rounded-xl hover:bg-brand-700 transition"
//           >
//             Start Predicting
//           </button>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
//             <Menu />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {mobileOpen && (
//         <div className={`md:hidden px-6 pb-4 space-y-2 ${dark ? "bg-slate-900 text-white" : "bg-white"}`}>
//           <button onClick={() => onNavigate("home")} className="block w-full text-left py-2">Home</button>
//           <button onClick={() => onNavigate("predict")} className="block w-full text-left py-2">Predict</button>
//           <button onClick={() => onNavigate("about")} className="block w-full text-left py-2">About</button>
//           <button className="block w-full text-left py-2">Documentation</button>
//           <button className="block w-full text-left py-2">FAQ</button>
//           <button className="block w-full text-left py-2">Contact</button>
//           <button onClick={() => onNavigate("dashboard")} className="hover:text-brand-600 transition">Dashboard</button>
//         </div>
//       )}
//     </header>
//   )
// }
// import { ActivitySquare, Menu, Moon, Sun, ChevronDown } from "lucide-react"
// import { useState } from "react"

// export default function Navbar({ onNavigate }) {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [dark, setDark] = useState(false)
//   const [moreOpen, setMoreOpen] = useState(false)

//   return (
//     <header
//       className={`sticky top-0 z-20 border-b border-slate-200 ${
//         dark ? "bg-slate-900 text-white" : "bg-white/80 backdrop-blur"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
//         {/* Logo + Brand */}
//         <div
//           className="flex items-center gap-2 cursor-pointer"
//           onClick={() => onNavigate("home")}
//         >
//           <ActivitySquare className="text-brand-600" />
//           <h1 className="text-xl font-bold text-brand-700">
//             Rare Disease Predictor
//           </h1>
//         </div>

//         {/* Desktop Nav Links */}
//         <nav className="hidden md:flex ml-10 gap-6 text-sm font-medium relative">
//           <button
//             onClick={() => onNavigate("home")}
//             className="hover:text-brand-600 transition"
//           >
//             Home
//           </button>
//           <button
//             onClick={() => onNavigate("predict")}
//             className="hover:text-brand-600 transition"
//           >
//             Predict
//           </button>
//           <button
//             onClick={() => onNavigate("about")}
//             className="hover:text-brand-600 transition"
//           >
//             About
//           </button>

//           {/* More Dropdown (Click) */}
//           <div className="relative">
//             <button
//               onClick={() => setMoreOpen(!moreOpen)}
//               className="flex items-center gap-1 hover:text-brand-600 transition"
//             >
//               More <ChevronDown className={`w-4 h-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
//             </button>
//             {moreOpen && (
//               <div className="absolute bg-white dark:bg-slate-800 shadow-lg rounded-xl mt-2 py-2 w-44 border">
//                 <button
//                   onClick={() => onNavigate("dashboard")}
//                   className="block w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700"
//                 >
//                   Dashboard
//                 </button>
//                 <button className="block w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700">
//                   Documentation
//                 </button>
//                 <button className="block w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700">
//                   FAQ
//                 </button>
//                 <button className="block w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700">
//                   Contact
//                 </button>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Spacer + Right */}
//         <div className="ml-auto flex items-center gap-4">
//           {/* Dark Mode Toggle */}
//           <button
//             onClick={() => setDark(!dark)}
//             className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
//           >
//             {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//           </button>

//           {/* CTA Button */}
//           <button
//             onClick={() => onNavigate("predict")}
//             className="hidden md:inline-flex bg-brand-600 text-white px-4 py-2 rounded-xl hover:bg-brand-700 transition"
//           >
//             Start Predicting
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             <Menu />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {mobileOpen && (
//         <div
//           className={`md:hidden px-6 pb-4 space-y-2 ${
//             dark ? "bg-slate-900 text-white" : "bg-white"
//           }`}
//         >
//           <button
//             onClick={() => onNavigate("home")}
//             className="block w-full text-left py-2"
//           >
//             Home
//           </button>
//           <button
//             onClick={() => onNavigate("predict")}
//             className="block w-full text-left py-2"
//           >
//             Predict
//           </button>
//           <button
//             onClick={() => onNavigate("about")}
//             className="block w-full text-left py-2"
//           >
//             About
//           </button>
//           <button
//             onClick={() => onNavigate("dashboard")}
//             className="block w-full text-left py-2"
//           >
//             Dashboard
//           </button>
//           <button onClick={() => onNavigate("documentation")} className="block w-full text-left py-2">Dcumentation</button>
//           <button onClick={() => onNavigate("faq")} className="block w-full text-left py-2">FAQ</button>
//           <button onClick={() => onNavigate("contact")} className="block w-full text-left py-2">Contact</button>
//         </div>
//       )}
//     </header>
//   )
// }
import { ActivitySquare, Menu, Moon, Sun, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Navbar({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-20 border-b border-slate-200 ${
        dark ? "bg-slate-900 text-white" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Logo + Brand */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate("home")}
        >
          <ActivitySquare className="text-brand-600" />
          <h1 className="text-xl font-bold text-brand-700">
            Rare Disease Predictor
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex ml-10 gap-6 text-sm font-medium relative">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-brand-600 transition"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate("predict")}
            className="hover:text-brand-600 transition"
          >
            Predict
          </button>
          <button
            onClick={() => onNavigate("about")}
            className="hover:text-brand-600 transition"
          >
            About
          </button>

          {/* More Dropdown (Click) */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 hover:text-brand-600 transition"
            >
              More{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {moreOpen && (
              <div className="absolute bg-white dark:bg-slate-800 shadow-lg rounded-xl mt-2 py-2 w-44 border">
                <button
                  onClick={() => {
                    onNavigate("dashboard")
                    setMoreOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    onNavigate("documentation")
                    setMoreOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  Documentation
                </button>
                <button
                  onClick={() => {
                    onNavigate("faq")
                    setMoreOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  FAQ
                </button>
                <button
                  onClick={() => {
                    onNavigate("contact")
                    setMoreOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  Contact
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Spacer + Right */}
        <div className="ml-auto flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* CTA Button */}
          <button
            onClick={() => onNavigate("predict")}
            className="hidden md:inline-flex bg-brand-600 text-white px-4 py-2 rounded-xl hover:bg-brand-700 transition"
          >
            Start Predicting
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          className={`md:hidden px-6 pb-4 space-y-2 ${
            dark ? "bg-slate-900 text-white" : "bg-white"
          }`}
        >
          <button
            onClick={() => onNavigate("home")}
            className="block w-full text-left py-2"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate("predict")}
            className="block w-full text-left py-2"
          >
            Predict
          </button>
          <button
            onClick={() => onNavigate("about")}
            className="block w-full text-left py-2"
          >
            About
          </button>
          <button
            onClick={() => onNavigate("dashboard")}
            className="block w-full text-left py-2"
          >
            Dashboard
          </button>
          <button
            onClick={() => onNavigate("documentation")}
            className="block w-full text-left py-2"
          >
            Documentation
          </button>
          <button
            onClick={() => onNavigate("faq")}
            className="block w-full text-left py-2"
          >
            FAQ
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="block w-full text-left py-2"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  )
}
