const fs = require('fs');

//流的方式读取文件
let fileReadStream = fs.createReadStream('index.js');

//读取次数
let count = 0;

//保存数据
let str = '';

//开始读取
fileReadStream.on('data', (chunk) => {
    console.log(`${++count} 接收到：${chunk.length}`);
    // Console：1 接收到：数据长度
    str += chunk;
})

//读取完成
fileReadStream.on('end', () =>{
    console.log("——结束——");
    console.log(count);
    console.log(str);
})

// 读取失败
fileReadStream.on('error', (error) => {
    console.log(error);
})

let data = 'console.log("Hello World! 我要存入数据！")';

//写入流
let writeStream = fs.createWriteStream('index.js');

writeStream.write(data,  'utf-8');
writeStream.end();
writeStream.on('finish', () => {
    console.log('写入完成！');
    // Console：写入完成
});