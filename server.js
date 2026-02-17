import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.post("/generate-banner", async (req, res) => {
    const { projectName, ticker, description } = req.body;
    if (!description) return res.status(400).json({ error: "Description required" });

    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: `${description} ${projectName ? "for project " + projectName : ""}`,
                n: 1,
                size: "1500x500"
            })
        });

        const data = await response.json();
        if (!data.data || !data.data[0]?.url) {
            return res.status(500).json({ error: "No image returned" });
        }

        res.json({ image: data.data[0].url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
