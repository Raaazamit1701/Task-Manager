const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const authModel = require('./Models/Model');
const bcrypt = require('bcrypt');

// Local strategy callback function
const LocalStrategycallback = (email, password, done) => {
  authModel
    .findOne({ email: email })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }
      const isValid = bcrypt.compare(password, user.password);
      isValid.then((val) => {
        if (val) return done(null, user);
        return done(null, false, { message: 'Incorrect password' });
      });
    })
    .catch((err) => {
      return done(err);
    });
};

// Configure local strategy
passport.use(new LocalStrategy({ usernameField: 'email' }, LocalStrategycallback));

// Serialization and deserialization
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  authModel
    .findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

module.exports = passport;
