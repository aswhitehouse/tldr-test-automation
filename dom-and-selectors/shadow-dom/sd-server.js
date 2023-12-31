const express = require('express');
const app = express();
const path = require('path');

const port = 3001;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'sd-example.html'));
});

app.listen(port, () => {
  console.log('Server is running on port '+port);
});
