import { Upload } from "lucide-react";

export default function PdfResumeInput() {
    return (
        <div className="flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Upload size={28} />
            </div>

            <h3 className="font-semibold text-slate-800">Upload your resume</h3>

            <p className="mt-1 text-sm text-slate-400">PDF files only</p>

            <button className="mt-4 rounded-lg border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                Choose PDF
            </button>
        </div>
    );
}
