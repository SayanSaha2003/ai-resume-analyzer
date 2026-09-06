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
                            role: "system",
                            content: `You are an expert resume reviewer.

                                        Analyze the resume objectively and provide practical feedback.
                                                                
                                        Evaluate the resume based on:
                                        1. Skills and technical relevance
                                        2. Work experience
                                        3. Projects
                                        4. Education
                                        5. Achievements and measurable impact
                                        6. Clarity and organization
                                        7. Overall resume quality
                                                                
                                        Give an overall score from 0 to 100.
                                                                
                                        Scoring guide:
                                        - 90-100: Excellent
                                        - 80-89: Very good
                                        - 70-79: Good
                                        - 60-69: Needs improvement
                                        - Below 60: Significant improvements needed
                                                                
                                        Only use information that is actually present in the resume.
                                        Do not invent experience, skills, education, or achievements.
                                                                
                                        Suggestions should be specific and actionable.`,
                        },
                        {
                            role: "user",
                            content: `Analyze the following resume:${resumeText}`,
                        },
                    ],
                    response_format: {
                        type: "json_schema",
                        json_schema: {
                            name: "resume_analysis",
                            strict: true,
                            schema: {
                                type: "object",
                                properties: {
                                    overallScore: {
                                        type: "number",
                                    },
                                    summary: {
                                        type: "string",
                                    },
                                    strengths: {
                                        type: "array",
                                        items: {
                                            type: "string",
                                        },
                                    },
                                    weaknesses: {
                                        type: "array",
                                        items: {
                                            type: "string",
                                        },
                                    },
                                    skills: {
                                        type: "array",
                                        items: {
                                            type: "string",
                                        },
                                    },
                                    suggestions: {
                                        type: "array",
                                        items: {
                                            type: "string",
                                        },
                                    },
                                },
                                required: [
                                    "overallScore",
                                    "summary",
                                    "strengths",
                                    "weaknesses",
                                    "skills",
                                    "suggestions",
                                ],
                                additionalProperties: false,
                            },
                        },
                    },
                }),
            },
        );
        const data = await response.json();

        const result = JSON.parse(data.choices[0].message.content);
        res.json({ result });
    } catch (error) {
        console.error("Error analyzing resume:", error);
        res.status(500).json({ error: "Failed to analyze resume" });
    }
});

export default router;
