jQuery:js库的一种

jQuery对象和Dom对象的相互转换

jQuery的一些方法css、hasClass、removeClass、addClass、toggleClass、val、text、html

页面加载事件 $(window).load(function(){})、$(document).ready(function(){})、$(function(){})

链式编程css方法

show、hide、slideUp、slideDown、slideToggle、fadeIn

animate

jQuery的元素创建（2）和移除（3），append和appendTo方法

next、nextAll、prev、prevAll、siblings、parent、children、find

attr、prop

为元素绑定事件（4）和解绑事件

trigger、triggerHandler（不能触发浏览器的默认行为）

几个属性innerWidth、outerWidth、outerHeight(true)

[artTemplate](https://blog.csdn.net/qq_33401924/article/details/53259631)

jQuery的ajax
```
$.ajax({
    url:"",    //请求的url地址
    dataType:"json",   //返回格式为json
    async:true,//请求是否异步，默认为异步，这也是ajax重要特性
    data:{"id":"value"},    //参数值,键值对
    type:"GET",   //请求方式
    beforeSend:function(){
        //请求前的处理
    },
    success:function(req){
        //请求成功时处理
    },
    complete:function(){
        //请求完成的处理
    },
    error:function(){
        //请求出错处理
    }
});
```
[jsonp参考](https://blog.csdn.net/u014607184/article/details/52027879)
```
$.ajax({
          async : true,
          url : "https://api.douban.com/v2/book/search",
          type : "GET",
          dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
          jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
          jsonpCallback: 'handleResponse', //设置回调函数名
          data : {
              q : "javascript", 
              count : 1
          }, 
          success: function(response, status, xhr){
              console.log('状态为：' + status + ',状态是：' + xhr.statusText);
              console.log(response);
          }
      });
```



