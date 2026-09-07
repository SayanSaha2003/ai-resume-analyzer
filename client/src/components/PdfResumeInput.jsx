import { useState } from "react";
import { Upload } from "lucide-react";

import { extractTextFromPdf } from "../services/pdfService";

export default function PdfResumeInput({ setResumeText }) {
    const [file, setFile] = useState(null); // State to hold the selected file
    const [isDragging, setIsDragging] = useState(false); // State to track dragging

    // Handle file selection
    const handleFile = async (selectedFile) => {
        if (!selectedFile) return;

        if (selectedFile.type !== "application/pdf") {
            alert("Please select a PDF file.");
            return;
        }

        setFile(selectedFile);

        // Extract text from the selected PDF file
        try {
            const extractedText = await extractTextFromPdf(selectedFile);
            setResumeText(extractedText);

            // console.log("Extracted PDF text:", extractedText);
        } catch (error) {
            console.error("PDF extraction failed:", error);
            alert("Failed to extract text from PDF.");
        }
    };

    // Handle browser file picker
    const handleFilePickup = (e) => {
        const pickedFile = e.target.files[0];
        handleFile(pickedFile);
    };

    // Handle drag over event
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    // Handle drag leave event
    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    // Handle drop event
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        handleFile(droppedFile);
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed transition ${
                isDragging ? "border-blue-500 bg-blue-50" : "border-slate-200"
            }`}
        >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Upload size={28} />
            </div>
            {file ? (
                // After file selection
                <>
                    <h3 className="font-semibold text-slate-800">
                        {file.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                        PDF selected successfully
                    </p>
                </>
            ) : (
                // Before file selection
                <>
                    <h3 className="font-semibold text-slate-800">
                        Upload your resume
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                        PDF files only
                    </p>

                    <label className="mt-4 cursor-pointer rounded-lg border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                        Choose PDF
                        {/* Browser file Picker */}
                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={handleFilePickup}
                            className="hidden"
                        />
                    </label>
                </>
            )}
        </div>
    );
}
