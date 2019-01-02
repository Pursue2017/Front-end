[Gulp](https://www.gulpjs.com.cn/)

任务化，基于数据流（I/O），执行异步（可以同步），有自己的内存，使用的是nodejs中stream读取和操作

1.安装	全局+局部	npm install gulp -g		npm install gulp --save-dev

2.Gulpfile.js	配置文件	注册默认任务
var gulp = require(‘gulp’);
gulp.task(‘default’, [任务]);


开发压缩后的index.html是dist文件夹下的，注意引入的js和css的路径

3.glup插件		gulp-concat	合并文件（js/css）

gulp-uglify		压缩js文件

gulp-rename		文件重命名

gulp-less			编译less

gulp-clean-css		压缩css

gulp-livereload	实时自动编译刷新

gulp-jshint		js代码检查

gulp-imagemin	图片压缩

gulp-htmlmin		压缩html

gulp-connect		实时加载

connect.server({
Root:’dist/’,
Livereload:true,
Port:5000
})

每个任务后面加.pipe(connect.reload())

open插件可以自动打开指定链接

gulp-load-plugins
var $ = require(‘gulp-load-plugins’);
$.concat	$.rename

下载插件，引入插件，使用

重要API

gulp.src(fliePath/pathArr)	读取文件

匹配路径		*、**、?、[...]、[!...]、[^...]、![...|...|...]、?[...|...|...]、+[...|...|...]、*[...|...|...]、@[...|...|...]

gulp.dest(‘dist’)	dist后接src的*路径，src可以设置base路径

gulp.task(‘mytask’, [dep], fn(){})

gulp.watch(‘filePath’, [‘js’])

4.gulp 任务名		不写任务名就执行默认任务

5.不写return是同步，写return是异步

6.半自动化项目构建,每个任务后加实时刷新


7.全自动构建项目，不用手动刷新，Gulp-connect，每个任务后加

自动打开地址，open开发插件
安装引入
