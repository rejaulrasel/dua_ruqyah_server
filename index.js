const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Connect to SQLite database
const db = new sqlite3.Database('./dua_main.sqlite', (err) => {
    if (err) {
        console.error('Database connection error:', err.message);
    } else {
        console.log('Successfully Connected to the SQLite database.');
    }
});


app.get("/", (req, res) => {
    res.send("Welcome to Dua Ruqyah world");
})


// API to get all categories
app.get('/api/categories', (req, res) => {
    db.all('SELECT * FROM category', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Dua Ruqyah Backend running on http://localhost:${port}`);
});