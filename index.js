const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/generate-banner", async (req, res) => {
    const { description, projectName, ticker } = req.body;

    if (!description) return res.status(400).json({ error: "Description required" });

    // Example: return placeholder image
    return res.json({ image: "https://via.placeholder.com/1500x500.png?text=AI+Banner" });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
