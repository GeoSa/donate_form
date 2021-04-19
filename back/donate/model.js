const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Donate = new Schema({
    currency: String,
    amount: String
});

module.exports = mongoose.model('Donates', Donate);