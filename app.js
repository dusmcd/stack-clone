const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const { User, Question } = require('./db/models');
const volleyball = require('volleyball');

app.use(volleyball); // logging middleware
app.use(express.static('public'));
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  try {
    res.send(require('./views/index')('Jordan Radford'));
  } catch (err) {
    next(err);
  }
});

app.get('/question/ask', (req, res, next) => {
  try {
    res.send(require('./views/questions/ask'));
  } catch (err) {
    next(err);
  }
});

app.post('/question/ask', async (req, res, next) => {
  try {
    const question = {
      title: req.body.title,
      content: req.body.content,
    };
    await Question.create(question);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// error handling middleware
app.use((err, req, res, next) => {
  if (err.status === 404) {
    next();
  } else {
    res.status(500).send(res.send(require('./views/internal-error')));
  }
});

app.use((req, res, next) => {
  res.status(404).send(require('./views/not-found'));
});

db.sync().then(() => {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
