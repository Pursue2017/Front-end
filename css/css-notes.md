css三种样式 

内联样式   
`<span style="color:red;font-size:25px"></span>`

内部样式
```
    <style>
         span {
              color:red;
             font-size:25px
               }
    </style>
```

外部样式表

`<link rel="stylesheet" href="../reset.css" />`

rel 属性用于指定当前文档与被链接文档的关系。

font:font-style font-weight font-size/line-height font-family

border: border-width border-style border-color

background: background-color background-image repeat position attachment

选择器 #id .class span * div p div>p div.p div,p
:link :visit :hover :active

标签显示模式 block inline inline-block

常见的块级元素和内联元素

css三大特性：继承、层叠、优先级

优先级 !important>内联样式（1000）>id（100）>class、伪类、属性（10）>标签、伪元素（1）>*>继承>浏览器默认

css三大模块：盒子模型、浮动、定位

padding盒子变大问题、背景图片和插入图片、margin合并现象、盒子塌陷问题

浮动：使多个div在一行显示，方便布局；清除浮动：解决父级元素因为子级元素浮动引起的内部高度为0的问题
1. .clearfix {clear:both;}
2.  overflow:hidden;
3. .clearfix:after {content:"";  display:block;  height:0;  clear:both;  visibility:hidden;}
   .clearfix  {*zoom:1;}
4. .clearfix:before, .clearfix:after {content: "";  display: table;}
   .clearfix:after {clear:both;}
   .clearfix {*zoom:1;}
   
定位包括定位模式和边偏移,子绝父相,z-index

[盒子居中问题](https://blog.csdn.net/u012426959/article/details/79395132 "参考")

元素的显示和隐藏display visibility overflow

css精灵图、滑动门

字体图标icoMoon

favicon.ico

`<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />`

代码压缩网站、w3c验证网站、仿站小工具


