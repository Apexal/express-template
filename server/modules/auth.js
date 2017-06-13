const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../config').googleAuth;

module.exports = () => {
    
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // Get user by ID
    passport.deserializeUser((id, done) => {
        done(null, id);
    });

    passport.use(new GoogleStrategy(config, 
        (req, token, refreshToken, profile, done) => {
            // Find user
            return done(null, profile);
        }
    ));

    return passport;
};