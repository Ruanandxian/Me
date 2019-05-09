// 文件服务器
var 
// 将模块实例化
    fs=require('fs'),
    url=require('url'),
    path=require('path'),
    http=require('http');
// console.log(process.argv[2]);
//获取当前路径,process.argv[2],获取后一个路径
var root=path.resolve(process.argv[2]||'.');
console.log('Static root dir:'+root);

//创建一个http服务器
var server=http.createServer(function(request,response){

// 得到访问的pathname
    var pathname=url.parse(request.url).pathname;
    console.log(url.parse(request.url));
// 拼接成本地的文件目录
    var filepath=path.join(root,pathname);
    // console.log(filepath);

    fs.stat(filepath,function(err,stats){
        // 如果是文件并且没有错误
        if(!err&&stats.isFile()){
            console.log('200'+request.url);
// 返回200状态码
            response.writeHead(200);
// 流模式读文件写入response
            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log('404'+request.url);

            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});




// 改进后的代码
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');

var 
    fs=require('fs'),
    url=require('url'),
    path=require('path'),
    http=require('http');
// console.log(process.argv[2]);
var root=path.resolve(process.argv[2]||'.');
console.log('Static root dir:'+root);

var server=http.createServer(function(request,response){
    // 创建一个路径数组可供选择
    var fileName=[
        path.join(root,"/test.html"),
        path.join(root,"/defalut.html"),
    ]


    var pathname=url.parse(request.url).pathname;
    console.log(url.parse(request.url));

    var filepath=path.join(root,pathname);
    // console.log(filepath);

    fs.stat(filepath,function(err,stats){
        if(!err&&stats.isFile()){
            get200(filepath);
            // 判断url是文件还是目录
        }else if(!err&&stats.isDirectory()){
            fs.stat(fileName[0],function(err,stats){
                if(!err&&stats.isFile()){
                get200(fileName[0]);
                }else{
                    fs.stat(fileName[1],function(err,stats){
                        if(!err&&stats.isFile()){
                            get200(fileName[1]);
                        }
                    })
                }
            })
        }
        else{
            get404();
        }
    });

    function get200(filepath){
        console.log('200'+request.url);
        response.writeHead(200);
        fs.createReadStream(filepath).pipe(response);
    };
    function get404(){
        console.log('404'+request.url);
        response.writeHead(404);
        response.end('404 NOT FOUND');
    }
});



server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
