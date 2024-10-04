const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));
app.get('/shout', (req, res) => {
  let name = req.query.name;
  let UpperCaseName = name.toUpperCase();
  res.send(UpperCaseName);
});
app.get('/fullname', (req, res) => {
  let firstname = req.query.firstname;
  let lastname = req.query.lastname;
  let fullname = firstname + ' ' + lastname;
  res.send(fullname);
});
app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let date = month + ', ' + year;
  res.send(date);
});
app.get('/greeting', (req, res) => {
  let name = req.query.name;
  let greetingMessage = 'Namaste, ' + name + '!';
  res.send(greetingMessage);
});
app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + ', ' + city + ', ' + state;
  res.send(address);
});
app.get("/")

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
