require('dotenv').config();
const express = require('express');
const makeRequest = require('./src/makeRequest');
const { login, signup, forgotPassword } = require('./src/Controllers');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', makeRequest(login));
app.post('/signup', makeRequest(signup));
app.post('/forgotpassword', makeRequest(forgotPassword));

app.use((req, res, next) => {
  res.status(404).send({ message: 'Not Found' });
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: 'Internal Server Error' });
});

app.listen(PORT, () => console.log('app running op port', PORT));