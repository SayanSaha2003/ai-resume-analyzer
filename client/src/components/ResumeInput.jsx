import { useState } from "react";
import { FileText, Upload, Sparkles } from "lucide-react";

import TextResumeInput from "./TextResumeInput";
import PdfResumeInput from "./PdfResumeInput";

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
                <TextResumeInput
                    resumeText={resumeText}
                    setResumeText={setResumeText}
                />
            ) : (
                <PdfResumeInput setResumeText={setResumeText} />
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
