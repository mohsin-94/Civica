// Implement your web server here

const express = require('express');

const PORT = 80;
const app = express();

app.listen(PORT, () => console.log(`App running at http://localhost on port ${PORT}`));