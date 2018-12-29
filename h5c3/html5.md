语义化标签 nav header footer main article aside

兼容处理 IE8 引入html5shiv.min.js

表单新增type属性：email、tel、url、number、search、range、color、time、date、datetime、datetime-local
month、week、progress、meter、datalist

表单新增事件：oninput、onkeyup、oninvalid

音频标签audio 属性 src controls autoplay loop

视频标签video、source 属性 src controls autoplay loop width height poster

querySelector("li").classList.add("red")、item(2)、remove("red")

querySelectroAll("li")[2].classList.contains("red")、toggle("red")

html5自定义属性 data-school-name = "ouc"

p.dataset["schoolName"]     p为dom元素

网络监听接口
window.addEventListener("online、offline", function(){})

全屏接口
requestFullScreen 需要加前缀webkit moz ms o

exitFullScreen（也需要加前缀）、fullScreenElement（这两个通过document调用）

FileReader的使用 方法readAsText、readAsBinaryString、readAsDataUrl(p.files[0])、abort、事件onload、onloadend、onabort、onerror、onloadstart、onprogress

拖拽接口的使用 draggable = "true" 被拖拽元素事件 ondrag、ondragstart、ondragleave、ondragend

目标元素事件 ondragenter、ondragover(e.preventDefault)、ondrop、ondragleave

事件参数 e.target、e.currentTarget

e.dataTransfer.setData和getData用来被拖动的数据

地理接口定位

html5的web存储、sessionStorage(5mb)、localStorage(20mb)、setItem、getItem、removeItem、clear

应用程序缓存 cache manifest
<html  manifest="demo.appcache">
CACHE、NETWORK、FALLBACK






