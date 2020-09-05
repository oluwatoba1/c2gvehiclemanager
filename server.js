const express = require('express');
// const connectDB = require('./config/db');

const app = express();

require('./config/db');
// require('./models');

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to Contact Keeper API' }));

//Define routes
app.use('/api/users', require('./applicants/applicants.routes'));
app.use('/api/auth', require('./auth/auth.routes'));
app.use('/api/license', require('./license/license.routes'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
