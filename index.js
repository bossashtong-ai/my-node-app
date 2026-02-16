const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('API is live!');
});

// API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
