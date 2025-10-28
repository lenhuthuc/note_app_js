const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const authRoutes = require('./routes/auth.routes');
const noteRoutes = require('./routes/note.routes');
const profileRoutes = require('./routes/profile.routes');
app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes);
app.use('/api',noteRoutes);
app.use('/api',profileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});