let fs = require("fs");

//判断文件是文件夹还是文件
/**
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限），默认 0777
 * callback - 回调，传递异常参数 err
 */
fs.stat("index.js", (error, stats) => {
    if(error) {
        console.log(error);
        return false;
    } else {
        console.log(stats);
        console.log(`文件:${stats.isFile()}`);
        console.log(`文件:${stats.isDirectory()}`);
        return false;
    }
})


//创建目录
/**
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限），默认 0777
 * callback - 回调，传递异常参数 err
 */
fs.mkdir('css', (err) => {
    if(err) {
        console.log(err);
        return false;
    } else {
        console.log("创建目录成功");
    }
})


//写入文件
/**
 * filename (String) 文件名称
 * data (String | Buffer) 将要写入的内容，可以是字符串或者 buffer 数据。
 * · encoding (String) 可选。默认 'utf-8'，当 data 是 buffer 时，该值应该为 ignored。
 * · mode (Number) 文件读写权限，默认 438。
 * · flag (String) 默认值 'w'。
 * callback { Function } 回调，传递一个异常参数 err。
 * 这样的写入，是清空原文件中的所有数据，然后添加 Hello jsliang 这句话。即：存在即覆盖，不存在即创建。
 */
fs.writeFile('index.js', 'Hello jsliang', (err) => {
    if(err) {
        console.log(err);
        return false;
    } else {
        console.log("写入成功！");
    }
})


//追加文件
fs.appendFile('index.js', '这是要追加的文本', (err) => {
    if(err) {
        console.log(err);
        return false;
    } else {
        console.log("写入成功！");
    }
})


//读取文件
fs.readFile('index.js', (err, data) => {
    if(err) {
        console.log(err);
        return false;
    } else {
        console.log("读取文件成功！");
        console.log(data);
    }
})


//读取目录
fs.readdir('node_modules', (err, data) => {
    if(err) {
        console.log(err);
        return false;
    } else {
        console.log("读取目录成功！");
        console.log(data);
    }
})


//重命名,也可以剪切
fs.rename('index.js', (err) => {
    if(err) {
        console.log(err);
        return false;
    } else {
        console.log("重命名成功！");
    }
})


fs.rename('jsliang.js', 'node_modules/jsliang.js', (err) => {
    if(err) {
        console.log(err);
        return false;
    } else {
        console.log("剪切成功！");
    }
})

