const koaRouter = require('koa-router');
const config = require('../config/config');
const dbWriter = require('./db_manager');

const router = new koaRouter();

router.post('/donate', async (ctx) => {
    let data = ctx.request.body;
    if (!config.currencies.find(item => item.code === data.currency)) {
        ctx.status = 400;
        ctx.body = {'error': 'Incorrect currency'};
    } else if (Number(data.amount) < 1) {
        ctx.status = 400;
        ctx.body = {'error': 'Incorrect amount'};
    }
    let response = await dbWriter(ctx.request.body);
    console.log(response);
    ctx.status = Number(response.status);
    ctx.body = response.desc;
});

module.exports = router;