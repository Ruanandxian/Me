async (ctx,next)=>{
    ctx.render('index.html',{
        title:'Welcome'
    });
}

async (ctx,next)=>{
    var 
        email=ctx.request.body.email||'',
        password=ctx.request.body.password||'';
    if(email==='admin@example.com'&&password==='123456'){
        ctx.render('signin-ok.html',{
            title:'Sign In OK',
            name:'Mr Node'
        });
    }else{
        ctx.render('signin-failed.html',{
            title:'Sign In failed'
        });
    }
}