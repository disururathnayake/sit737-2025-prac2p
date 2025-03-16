const express = require('express');
const path = require('path');

const app = express();
const PORT = 3040; // Use a consistent port variable


app.use(express.static(path.join(__dirname)));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Adding numbers
app.get('/addToNumber', (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = n1 + n2; // Simple addition
    res.json({ statuscode: 200, data: result });
});


app.listen(PORT, () => {
    console.log(`hello i'm listening to port ${PORT}`);
});
