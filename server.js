const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/users', require('./routes/api/usersApi'));
app.use('/api/auth', require('./routes/api/authApi'));
app.use('/api/profile', require('./routes/api/profileApi'));
app.use('/api/posts', require('./routes/api/postsApi'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
