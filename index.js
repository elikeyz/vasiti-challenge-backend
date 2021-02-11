const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200).json({ message: 'Welcome to Avios' }));

app.listen(port, () => {
  console.log('App is listening on port ' + port);
});