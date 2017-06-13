module.exports = {
    database: {
        host: 'localhost',
        name: 'app_name',
        port: '27017'
    },
    googleAuth: {
        clientID: '',
        clientSecret: '',
        callbackURL: '/auth/google/callback',
        passReqToCallback: true
    },
    secret: 'app secret'
};