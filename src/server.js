import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.all('/', async (ctx) => {
  ctx.body = '<html><body><h1>Hello World!</h1></body></html>';
});

app.use(router.routes());

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
