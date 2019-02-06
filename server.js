const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');

const usersRouter = require('./routes/user');
const policiesRouter = require('./routes/api/policies');
const contactsRouter = require('./routes/api/contacts')

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected');},
  err => { console.log('Can not connect to the database'+ err);}
); 

const app = express();


// CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});


app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', usersRouter);
app.use('/api/policies', policiesRouter);
app.use('/api/contacts', contactsRouter);

app.get('/', function(req, res) {
  res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
