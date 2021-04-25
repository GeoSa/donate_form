const Donate = require('./model');

module.exports = async function(data) {
    const donate = new Donate({
        currency: data.currency,
        amount: data.amount
    });
    await donate.save((err) => {
        if (err) throw new Error('DB save error');
    });

    return {'ok': true};
}
