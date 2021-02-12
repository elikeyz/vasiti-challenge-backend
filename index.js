const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
require('./cloudinary');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', router);

app.get('/', (req, res) => res.status(200).json({ message: 'Welcome to Avios' }));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// global error handler
app.use((err, req, res, next) => {
  res.status(err.status).json({
    message: err.message,
    success: false
  });
  next();
});

app.listen(port, () => {
  console.log('App is listening on port ' + port);
});