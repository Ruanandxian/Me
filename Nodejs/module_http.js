// 导入http模块
var http=require('http');
// 创建httpserver并传入回调函数
var server=http.createServer(function(request,response){
    // 回调函数接收request和response对象
    //获得HTTP请求的method和url
    console.log(request.method+':'+request.url);
    // 将HTTP响应200写入，response，同时设置Content-type:text/html
    response.writeHead(200,{'Content-Type':'text/html'});
    // 将HTTP响应的HTMl内容写入response
    response.end('<h1>Hello world</h1>');
});
// 让服务器监听8080端口
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080');

// 处理本地文件目录
var url=require('url');
console.log(url.parse(''))


var path=require('path');

// 解析当前目录
var wordDir=path.resolve('.')
// 组合完整的文件路径
console.log(wordDir);
var filePath=path.join(wordDir,'src','test.html');
console.log(filePath);

