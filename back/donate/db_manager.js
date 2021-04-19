const Donate = require('./model');

module.exports = async function(data) {
    const donate = new Donate({
        currency: data.currency,
        amount: data.amount
    });
    donate.save((err) => {
        if (err) return {status: 400, desc: {notOk: 'DB error'}};
    });

    return {status: 201, desc: {'ok': true}};
}