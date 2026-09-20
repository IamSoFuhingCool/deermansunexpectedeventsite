const express = require('express');
const os = require('os');
const path = require('path');
const app = express();

// Serve static files from your project root
app.use(express.static(path.join(__dirname, '..')));

// Send the PC user name or hostname
app.get('/api/pc-name', (req, res) => {
  // os.userInfo().username gives the user name (e.g., 'chara')
  // os.hostname() gives the PC name
  res.json({ pcName: os.userInfo().username });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));