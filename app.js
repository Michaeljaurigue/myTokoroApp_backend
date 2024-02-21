const express = require('express');
// const bodyParser = require('body-parser'); // Not necessary if using Express 4.16+
// const placesRoutes = require('./routes/places-routes');

const app = express();

// Properly use built-in body-parser middleware in Express 4.16 and later
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route to bypass placesRoutes
app.get('/test', (req, res) => {
    res.json({ message: 'Direct route works' });
});

// Uncomment and adjust as necessary for actual use
// app.use('/api/places', placesRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
