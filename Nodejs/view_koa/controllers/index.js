// async (ctx,next)=>{
//     ctx.render('index.html',{
//         title:'Welcome'
//     });
// }

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'Welcome'
        });
    }
};