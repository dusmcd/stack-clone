const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const { User, Question } = require('./db/models');
const volleyball = require('volleyball');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;

app.use(volleyball); // logging middleware
app.use(express.static('public'));
app.use(
  session({ secret: 'Hey, Hey what can I do?', saveUninitialized: false })
);
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

// passport config
app.use(passport.initialize());
passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email: email } });
        if (!user || !user.validPassword(password)) {
          return done(null, false, {
            message: 'Incorrect username and/or password',
          });
        }
        return done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);

app.use(passport.session());

// establish sessions
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

app.get('/', (req, res, next) => {
  try {
    res.send(require('./views/index')('Jordan Radford'));
  } catch (err) {
    next(err);
  }
});

app.get('/login', (req, res, next) => {
  try {
    res.send(require('./views/login'));
  } catch (err) {
    next(err);
  }
});

app.post('/login', (req, res, next) => {
  try {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true,
    });
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
