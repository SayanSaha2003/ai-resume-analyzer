import { FileSearch, CheckCircle, AlertCircle, Lightbulb } from "lucide-react";

export default function AnalysisResult({ analysis, loading, error }) {
    return (
        <section className="rounded-xl bg-white p-5 shadow-sm">
            <h2 className="mb-6 text-lg font-bold text-slate-900">
                Analysis Result
            </h2>

            {loading && (
                <div className="flex min-h-80 items-center justify-center">
                    <p className="text-sm text-slate-500">
                        Analyzing your resume...
                    </p>
                </div>
            )}

            {error && !loading && (
                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
                    {error}
                </div>
            )}

            {!analysis && !loading && !error && (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <FileSearch size={28} />
                    </div>

                    <h3 className="font-semibold text-slate-800">
                        Your analysis will appear here
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                        Submit your resume to get AI-powered feedback.
                    </p>
                </div>
            )}

            {analysis && !loading && (
                <div className="space-y-6">
                    {/* Score */}
                    <div className="rounded-lg bg-blue-50 p-5 text-center">
                        <p className="text-sm font-medium text-slate-500">
                            Overall Score
                        </p>

                        <p className="mt-1 text-5xl font-bold text-blue-600">
                            {analysis.overallScore}
                        </p>

                        <p className="text-sm text-slate-500">out of 100</p>
                    </div>

                    {/* Summary */}
                    <div>
                        <h3 className="mb-2 font-semibold text-slate-900">
                            Summary
                        </h3>
                        <p className="text-sm leading-6 text-slate-600">
                            {analysis.summary}
                        </p>
                    </div>

                    {/* Strengths */}
                    <div>
                        <h3 className="mb-3 flex items-center gap-2 font-semibold text-slate-900">
                            <CheckCircle size={18} />
                            Strengths
                        </h3>

                        <ul className="space-y-2">
                            {analysis.strengths.map((item, index) => (
                                <li
                                    key={index}
                                    className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Weaknesses */}
                    <div>
                        <h3 className="mb-3 flex items-center gap-2 font-semibold text-slate-900">
                            <AlertCircle size={18} />
                            Weaknesses
                        </h3>

                        <ul className="space-y-2">
                            {analysis.weaknesses.map((item, index) => (
                                <li
                                    key={index}
                                    className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="mb-3 font-semibold text-slate-900">
                            Skills
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {analysis.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Suggestions */}
                    <div>
                        <h3 className="mb-3 flex items-center gap-2 font-semibold text-slate-900">
                            <Lightbulb size={18} />
                            Suggestions
                        </h3>

                        <ul className="space-y-2">
                            {analysis.suggestions.map((item, index) => (
                                <li
                                    key={index}
                                    className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}
