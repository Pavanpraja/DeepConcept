const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simulated login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log([email, password]);
  

  if (email === "pp3850064@gmail.com" && password === "pp3850064") {
    return res.status(200).json({
      success: true,
      user: { id: 1, name: "John Doe", email },
    });
  }

  return res.status(401).json({ success: false, message: 'Invalid email or password' });
});

// Start the backend server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
