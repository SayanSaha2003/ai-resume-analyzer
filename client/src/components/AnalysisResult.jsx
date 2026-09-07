import { FileSearch } from "lucide-react";

export default function AnalysisResult() {
    return (
        <section className="min-h-112.5 rounded-xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
                Analysis Result
            </h2>

            <div className="flex h-97.5 flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <FileSearch size={38} />
                </div>

                <p className="font-semibold text-slate-600">
                    Your analysis will appear here
                </p>

                <p className="mt-2 max-w-sm text-sm text-slate-400">
                    Submit your resume to get AI-powered feedback.
                </p>
            </div>
        </section>
    );
}
