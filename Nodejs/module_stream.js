
// 从文件流中读取文件
var fs=require('fs');
var rs=fs.createReadStream('Light.txt','utf-8');
rs.on('data',function(chunk){
    console.log('Data:');
    console.log(chunk);
});
rs.on('end',function(){
    console.log('END');
});
rs.on('error',function(err){
    console.log('ERROR:'+err);
});


//以流的形式写入文件
var fs=require('fs');
var ws1=fs.createWriteStream('output1.txt','utf-8');
ws1.write('使用stream写入文本数据..\n');
ws1.write('END');
ws1.end();

var ws2=fs.createWriteStream('outpout2.txt');
ws2.write(new Buffer('使用stream写入二进制数据\n'),'utf-8');
ws2.write(new Buffer('END'),'utf-8');
ws2.end();


//以流的形式复制文件
var fs=require('fs');
var rs=fs.createReadStream('output1.txt','utf-8');
var ws=fs.createWriteStream('output2.txt','utf-8');
rs.pipe(ws);

// readable.pipe(writable, { end: false });不自动关闭Writeable流