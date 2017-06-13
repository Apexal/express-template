const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// SCHEMA NAMES MUST BE IN PascalCase
module.exports = {
    User: {
        googleId: String,
        email: { type: String, unique: true },
        name: {
            first: { type: String, trim: true },
            last: { type: String, trim: true }
        },
        rank: { type: Number, default: 0 },
        registeredDate: { type: Date, default: Date.now },
        accountStatus: { type: Number, default: 0 }
    }
};