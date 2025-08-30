// import { useState } from 'react'
// import { Upload } from "lucide-react"
// import ResultsCard from '../components/ResultsCard'
// import HistoryTable from '../components/HistoryTable'
// import { pushToast } from '../components/Toast'

// export default function Predict() {
//   const [file, setFile] = useState(null)
//   const [result, setResult] = useState(null)
//   const [history, setHistory] = useState([])
//   const [loading, setLoading] = useState(false)

//   const handleFile = (f) => setFile(f)

//   const predict = async () => {
//     if (!file) { pushToast("Please select a file first", "error"); return }
//     setLoading(true)
//     try {
//       const fd = new FormData()
//       fd.append("file", file)
//       const res = await fetch("http://localhost:5000/predict", { method: "POST", body: fd })
//       if (!res.ok) throw new Error("Prediction failed")
//       const data = await res.json()
//       setResult(data)
//       setHistory(h => [{ time: Date.now(), ...data }, ...h])
//       pushToast("Prediction completed", "success")
//     } catch (err) {
//       console.error(err)
//       pushToast(err.message || "Something went wrong", "error")
//     } finally { setLoading(false) }
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//       {/* File Upload Card */}
//       <div className="card p-8 flex flex-col items-center justify-center text-center border-dashed border-2 border-slate-300 hover:border-brand-400 transition cursor-pointer"
//         onClick={() => document.getElementById("fileInput").click()}>
//         <Upload className="w-12 h-12 text-brand-600 mb-3" />
//         <p className="text-slate-600">{file ? file.name : "Drag & drop or click to upload a file"}</p>
//         <input id="fileInput" type="file" className="hidden" onChange={e => handleFile(e.target.files[0])} />
//         <button
//           className="btn-primary w-full mt-6 disabled:opacity-50"
//           disabled={!file || loading}
//           onClick={predict}>
//           {loading ? "Predicting…" : "Predict"}
//         </button>
//       </div>

//       {/* Results + History */}
//       <div className="space-y-4">
//         <ResultsCard result={result} />
//         <HistoryTable rows={history} />
//       </div>
//     </div>
//   )
// }
// import React, { useState } from "react";

// const PredictDisease = () => {
//   const [inputText, setInputText] = useState("");
//   const [prediction, setPrediction] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handlePredict = async () => {
//     if (!inputText.trim()) return;

//     setLoading(true);
//     try {
//       // Convert input text into a "file" for FormData
//       const blob = new Blob([inputText], { type: "text/plain" });
//       const formData = new FormData();
//       formData.append("file", blob, "input.txt");

//       // Call backend API
//       const response = await fetch("http://localhost:8000/predict", {
//         method: "POST",
//         body: formData, // No headers needed; browser sets them for multipart/form-data
//       });

//       const data = await response.json();
//       setPrediction(data.prediction || "No prediction available");
//     } catch (error) {
//       console.error("Error fetching prediction:", error);
//       setPrediction("Error: Could not fetch prediction");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="predict-container">
//       <h2>Disease Predictor</h2>
//       <textarea
//         placeholder="Enter symptoms here..."
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//         rows={4}
//         style={{ width: "100%" }}
//       />
//       <br />
//       <button onClick={handlePredict} disabled={loading}>
//         {loading ? "Predicting..." : "Predict Disease"}
//       </button>
//       {prediction && (
//         <div className="result">
//           <h3>Prediction Result:</h3>
//           <p>{prediction}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PredictDisease;
import React, { useState } from "react";

const PredictDisease = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handlePredict = async () => {
    if (!file) {
      alert("Please upload a file!");
      return;
    }

    setLoading(true);
    setPrediction(null);
    const formData = new FormData();
    formData.append("file", file); 
    try {

      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData, // browser sets multipart/form-data headers automatically
      });

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setPrediction("Error: Could not fetch prediction");
    }
    setLoading(false);
  };

  return (
  <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
    <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
      Disease Predictor
    </h2>

    <div className="mb-4">
      <label className="block mb-2 text-gray-700 font-medium">
        Upload Symptoms File
      </label>

      {/* Hidden input */}
      <input
        type="file"
        accept=".txt,.pdf"
        onChange={handleFileChange}
        className="hidden"
        id="file-upload"
      />

      {/* Custom upload box */}
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors text-center"
      >
        {/* Cloud upload icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-500 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 014-4h1a4 4 0 018 0h1a4 4 0 110 8H7a4 4 0 01-4-4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 12v6m0 0l-3-3m3 3l3-3"
          />
        </svg>
        <span className="text-gray-500 break-words max-w-full">
          {file ? file.name : "Click to upload or drag file here"}
        </span>
      </label>
    </div>

    <button
      onClick={handlePredict}
      disabled={loading}
      className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "Predicting..." : "Predict Disease"}
    </button>

    {prediction && (
      <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 text-green-700 rounded-lg shadow-sm overflow-x-auto">
        <h3 className="font-semibold mb-2">Prediction Result:</h3>
        <pre className="whitespace-pre-wrap break-words">{JSON.stringify(prediction, null, 2)}</pre>
      </div>
    )}
  </div>
);
};
export default PredictDisease;
