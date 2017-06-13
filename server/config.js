module.exports = {
    database: {
        host: 'localhost',
        name: 'app_name',
        port: '27017'
    },
    googleAuth: {
        clientID: '130869429973-rr697mhnlajjsrf25t8g3eui1kgnv288.apps.googleusercontent.com',
        clientSecret: 'nOuEvgmhhZ2kTJp_I2B8rbR9',
        callbackURL: 'http://localhost:3000/auth/google/callback',
        passReqToCallback: true
    },
    secret: 'app secret'
};