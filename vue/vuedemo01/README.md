# vuedemo01

> 本项目摘自慕课网案例，旨在通过案例复习vue的相关知识

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#注意点

根节点Layout放reset.css，scoped去掉，否则部分属性会应用不到index.html

img标签只设置宽，会等比例缩放图片

对组件进行keep-alive缓存

加一个template标签 v-for循环

先用假数据写好样式

vue-resource

require引入图片，js中写法，webpack识别

[mock数据，json-server，bodyparser](https://blog.csdn.net/weixin_39728230/article/details/80293892)

父子组件传值

transition配合transform，设置两张图片

嵌套路由，this.$route.path

css公用样式可以写在父组件中，不写scoped

a标签的href也能使用路由  detail/analysis

lodash库

$event,原生dom事件以及event.target.value 

插头

vue-date-picker

watch和query

vuex










