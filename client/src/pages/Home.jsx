import { Sparkles } from "lucide-react";

export default function Home({ onSignIn }) {
    return (
        <main className="relative flex min-h-[calc(100vh-100px)] items-center justify-center overflow-hidden px-5">
            {/* Background shapes */}
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-100/60" />
            <div className="absolute right-30 top-20 h-80 w-80 rounded-full bg-blue-100/60" />

            {/* Hero */}
            <div className="relative z-10 max-w-3xl text-center">
                <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl md:text-7xl">
                    AI Resume <span className="text-blue-600">Analyzer</span>
                </h1>

                <p className="mt-6 text-lg text-slate-500 sm:text-xl">
                    Get AI-powered feedback on your resume.
                </p>

                <button
                    onClick={onSignIn}
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
                >
                    <Sparkles size={18} />
                    Get Started
                </button>
            </div>
        </main>
    );
}
