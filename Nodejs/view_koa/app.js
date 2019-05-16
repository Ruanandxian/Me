const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./Controller_01');

const templating = require('./templating');

const app = new Koa();

const isProduction=process.env.NODE_ENV==='production';

// 第一个middleware是记录URL以及页面执行时间：
app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.methods} ${ctx.request.url}`)
    var
        start=new Date().getTime(),
        execTime;
    await next();
    execTime=new Date(),getTime()-start;
    ctx.response.set('X-Response-Time',`${execTime}ms`)
})

// 第二个middleware处理静态文件
if(!isProduction){
    let staticFile=require('./static-files');
    app.use(staticFile('/static/',__dirname+'/static'))
}

// 第三个middleware解析POST请求：
app.use(bodyParser());


// 第四个middleware负责给ctx加上render()来使用Nunjucks：
app.use(templating('views',{
    noCache:!isProduction,
    watch:!isProduction
}));

app.use(controller());


app.listen(3000);
console.log('app start running port 3000');
