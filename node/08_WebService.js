let http = require('http');

let fs = require('fs');

let url = require("url");

let path = require("path");

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    if (pathName == "/") {
        // 默认加载的首页
        pathName = "index.html";
    }
    //后缀名
    let extName = path.extname(pathName);
    if (pathname !== '/favicon.ico') {
        fs.readFile('./08_webService/'+pathname, (error, data) => {
            if (err) {

                // 如果不存在这个文件

                console.log("404 Not Found!");
                fs.readFile('./08_WebService/404.html', (errorNotFound, dataNotFound) => {
                    if(errorNotFound) {
                        console.log(errorNotFound);
                    } else {
                        res.writeHead(200, {
                            "Content-Type": ext+"; charset='utf-8'"
                        });
                        // 读取写入文件
                        res.write(dataNotFound);
                        // 结束响应
                        res.end();
                    }
                })
                return;
            } else {
                // 返回这个文件
                //获取文件类型
                let ext = getExt(extName);
                // 设置请求头
                res.writeHead(200, {
                    "Content-Type": "text/html; charset='utf-8'"
                });
                // 读取写入文件
                res.write(data);
                // 结束响应
                res.end();
            }
        })
    }
}).listen(8080);

// 获取后缀名
getExt = (extName) => {
    // readFile 是异步操作，所以需要使用 readFileSync
    let data = fs.readFileSync('./08_ext.json');
    let ext = JSON.parse(data.toString());
    return ext[extName];
}



