const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from the yes!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});