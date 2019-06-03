const Koa=require('koa');

const bodyParser=require('koa-bodyparser')

const controller = require('./controller');

const templating = require('./templating');

const rest = require('./rest');


const app=new Koa();


// static file support:
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

app.use(bodyParser());

// add nunjucks as view:
app.use(templating('views', {
    noCache: true,
    watch: true
}));

// bind .rest() for ctx:
app.use(rest.restify());

app.use(controller());


app.listen(3000);

console.log('app start at port 3000...');