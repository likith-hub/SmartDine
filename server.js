const express = require('express');
const app = express();
const path = require('path');

const port = 3300;
const folderPath = '../SmartDine';

// Serve static files from the specified folder
app.use(express.static(folderPath));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
