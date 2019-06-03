const Koa=require('koa');

const bodyParser=require('koa-bodyparser')


const app=new Koa();

const controller=require('./controller');

app.use(bodyParser());

app.use(controller());


app.listen(3000);

console.log('app start at port 3000...');