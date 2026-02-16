const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so your Hostinger website can call the API
app.use(cors());
app.use(express.json());

// Default route for quick check
app.get('/', (req, res) => {
  res.send('✅ Node.js API is live on api.opusone.pro');
});

// API endpoint for your website
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from Railway Node.js!',
    timestamp: new Date().toISOString()
  });
});

// Example: optional dynamic route
app.get('/api/:name', (req, res) => {
  const name = req.params.name;
  res.json({
    message: `Hello, ${name}! Welcome to OpusOne API.`,
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
