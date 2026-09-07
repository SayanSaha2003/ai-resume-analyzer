import { useState } from "react";
import { FileText, Upload, Sparkles } from "lucide-react";

export default function ResumeInput({
    resumeText,
    setResumeText,
    onAnalyze,
    loading,
}) {
    const [activeTab, setActiveTab] = useState("text");

    return (
        <section className="rounded-xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-slate-900">
                Your Resume
            </h2>

            {/* Tabs */}
            <div className="mb-3 grid grid-cols-2 overflow-hidden rounded-lg border border-slate-200">
                <button
                    onClick={() => setActiveTab("text")}
                    className={`flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition ${
                        activeTab === "text"
                            ? "bg-blue-50 text-blue-600"
                            : "text-slate-600 hover:bg-slate-50"
                    }`}
                >
                    <FileText size={17} />
                    Paste Text
                </button>

                <button
                    onClick={() => setActiveTab("pdf")}
                    className={`flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition ${
                        activeTab === "pdf"
                            ? "bg-blue-50 text-blue-600"
                            : "text-slate-600 hover:bg-slate-50"
                    }`}
                >
                    <Upload size={17} />
                    Upload PDF
                </button>
            </div>

            {/* Input */}
            {activeTab === "text" ? (
                <textarea
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    placeholder="Paste your resume here..."
                    className="h-64 w-full resize-none rounded-lg border border-slate-200 p-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            ) : (
                <div className="flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Upload size={28} />
                    </div>

                    <h3 className="font-semibold text-slate-800">
                        Upload your resume
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                        PDF files only
                    </p>

                    <button className="mt-4 rounded-lg border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                        Choose PDF
                    </button>
                </div>
            )}

            {/* Analyze */}
            <button
                onClick={onAnalyze}
                disabled={loading || !resumeText.trim()}
                className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
                <Sparkles size={18} className="mr-2 inline-block" />
                {loading ? "Analyzing..." : "Analyze Resume"}
            </button>
        </section>
    );
}
