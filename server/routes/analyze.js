import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
    const { resumeText } = req.body;

    try {
        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [
                        {
                            role: "user",
                            content: `Briefly describe the resume: ${resumeText}`,
                        },
                    ],
                }),
            },
        );
        const data = await response.json();
        
        const result = data.choices[0].message.content;
        res.json({ result });
    } catch (error) {
        console.error("Error analyzing resume:", error);
        res.status(500).json({ error: "Failed to analyze resume" });
    }
});

export default router;
