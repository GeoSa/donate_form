const koa = require('koa');
const cors = require('@koa/cors');
const router = require('./donate/router');
const bodyParser = require('koa-bodyparser');
const config = require('./config/config');
const mongoose = require("mongoose");

const app = new koa();

mongoose.connect(`mongodb://${config.db_host}/donates`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.use( async (ctx, next) => {
  try {
    await next()
  } catch(err) {
    console.log(err.status)
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});