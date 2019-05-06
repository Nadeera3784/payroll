const passportService = require('../services/passport');
const passport = require('passport');
const mongoose = require('mongoose');
const jwt = require('jwt-simple');
const User = mongoose.model('user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

const requireAuth =  passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
    app.post('/signin' , requireSignin , (req, res, next) => {
        res.send({ token: tokenForUser(req.user) });
    })

    app.post('/signup' , (req, res, next) => {
        const email = req.body.email;//'abcd@abcd'
        const password =req.body.password; //'1234'
        
        if (!email || !password) {
            return res.status(422).send({ error: 'You must provide email and password'});
        }

        User.findOne({ email: email }, (err, existingUser) => {
            if (err) { return next(err); }

            if (existingUser) {
                return res.status(422).send({ error: 'Email is in use' });
            }

            const user = new User({
                email: email,
                password: password
            });

            user.save(function(err) {
                if (err) { return next(err); }
          
                res.json({ token: tokenForUser(user) });
            });

        }) 

    })
}