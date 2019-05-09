process.nextTick(function(){
    console.log('next callback');
});


process.on('exit',function(code){
    console.log('about to exit with code'+code);
})


console.log('nextTick was set');

if(typeof(window)=='undefined'){
    console.log('node.js');
}else{
    console.log('browser');
}