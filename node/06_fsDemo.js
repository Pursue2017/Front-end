// 1. 判断服务器上面有没有 upload 目录，没有就创建这个目录

let fs =require('fs');

fs.stat('upload', (err, stats) => {
    if(err) {
        fs.mkdir('upload', (err) => {
            if(err) {
                console.log(err);
                return false;
            } else {
                console.log("创建upload目录成功")
            }
        })
    } else {
        console.log(stats.isDirectory());
        console.log("有 upload 目录，你可以做更多操作！");
    }
})

// 2. 找出 html 目录下面的所有的目录，然后打印出来
fs.readdir('node_modules', (err, files) => {
    if(err) {
        console.log(err);
        return false;
    } else {
        // 判断是目录还是文件夹
        console.log(files);
        let filesArr = [];
        (function getFile(i) {

            // 循环结束
            if(i == files.length) {
                // 打印出所有目录
                console.log("目录：");
                console.log(filesArr);
                return false;
            }

            // 判断目录是文件还是文件夹
            fs.stat('node_modules/' + files[i], (error, stats) => {

                if(stats.isDirectory()) {
                    filesArr.push(files[i]);
                }

                // 递归调用
                getFile(i+1);

            })
        })(0)
    }
})