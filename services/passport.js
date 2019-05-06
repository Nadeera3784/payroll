const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {

  User.findOne({ email: email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }

    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); }

      return done(null, user);
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
  };

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

    User.findById(payload.sub, function(err, user) {
      if (err) { return done(err, false); }
  
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  });
  
  // Tell passport to use this strategy
  passport.use(jwtLogin);
  passport.use(localLogin);  