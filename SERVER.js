// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock Data: Articles
const articles = [
  {
    id: 1,
    title: 'How to Ace Your Job Interview',
    content: 'Some useful tips and tricks to succeed in your job interview...'
  },
  {
    id: 2,
    title: 'Building a Strong Resume',
    content: 'A step-by-step guide to building a resume that stands out...'
  },
  {
    id: 3,
    title: 'Career Development: A Lifelong Journey',
    content: 'Understand the importance of continuous learning in your career...'
  }
];

// GET request to fetch articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// POST request to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // In a real-world app, you'd store this in a database
  console.log('Inquiry received:', { name, email, message });
  res.status(200).json({ message: 'Your inquiry has been received' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
