// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//add a route
app.get('/comments', (req, res) => {
    res.send('Comments');
});
