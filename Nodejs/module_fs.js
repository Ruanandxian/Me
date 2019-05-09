$.getJSON('http://example.com/ajax',function(data){
    console.log('IO结果返回后执行');
});
console.log('不等待IO结果直接执行后续代码');

var data=getJSONSync('http://example.com/ajax');


异步读取文件
var fs=require('fs');

fs.readFile('Light.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});


//异步读取图片
var fs=require('fs');

fs.readFile('1.jpg',function(err,data){
    if(err){
        cosnole.log(err);
    }else{
        console.log(data);
        console.log(data.length+'bytes');

        //转换为string对象
        var text=data.toString('utf-8')
        console.log(text);

        //转换为Buffer对象
        var buf=Buffer.from(text,'utf-8');
        console.log(buf);
    }
});


//同步读取文件
var fb=require('fs');
var data=fb.readFileSync('Light.txt','utf-8');
console.log(data);

//异步写数据到文件中
var fs=require('fs');
var data='hello, Node.js';
fs.writeFile('output.txt',data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('ok');
    }
});

//同步写数据到文件中
var fs=require('fs');
var data='hello Node.js';
fs.writeFileSync('output.txt',data);
// 同步操作没有回调函数


//异步获取文件状态
var fs=require('fs');
fs.stat('Light.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        //是否是文件
        console.log('isFile:'+stat.isFile());
        // 是否是目录
        console.log('isDirectory:'+stat.isDirectory());
        if(stat.isFile()){
            // 文件大小
            console.log('size:'+stat.size);
            // 创建时间，Data对象
            console.log('birth time:'+stat.birthtime);
            // 修改时间，Data对象
            console.log('modified time:'+stat.mtime);
        }
    }
});

//同步获取文件状态
var fs=require('fs');
var data=fs.statSync('Light.txt');
console.log(data.isFile());