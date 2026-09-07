import ResumeInput from "../components/ResumeInput";
import AnalysisResult from "../components/AnalysisResult";

export default function Analyzer() {
    return (
        <main className="mx-auto max-w-7xl px-5 py-10">
            {/* Heading */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                    AI Resume <span className="text-blue-600">Analyzer</span>
                </h1>

                <p className="mt-3 text-slate-500">
                    Improve your resume with AI-powered feedback.
                </p>
            </div>

            {/* Main Grid */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Resume Card */}
                <ResumeInput />

                {/* Result Card */}
               <AnalysisResult />
            </div>
        </main>
    );
}
