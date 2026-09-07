export default function TextResumeInput({ resumeText, setResumeText }) {
    return (
        <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Paste your resume here..."
            className="h-64 w-full resize-none rounded-lg border border-slate-200 p-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
    );
}
