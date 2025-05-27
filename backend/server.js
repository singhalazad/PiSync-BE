const express = require('express');
const cors = require('cors');
const deviceRoutes = require('./routes/devices');
const errorRoutes = require('./routes/errors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/devices', deviceRoutes);
app.use('/api/errors', errorRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'PiSync API is running' });
});

app.listen(PORT, () => {
  console.log(`PiSync API server running on port ${PORT}`);
});