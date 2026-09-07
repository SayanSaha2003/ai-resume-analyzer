export const analyzeResume = async (resumeText) => {
    const response = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            resumeText,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Failed to analyze resume");
    }

    return data.result;
};
