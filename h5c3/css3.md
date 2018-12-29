属性选择器、兄弟选择器（+和~）、伪类选择器（:nth-child(n)、:nth-last-of-type(n)、:empty、:target）、伪元素（在dom树中找不到，::before，:;after，::first-line，::first-letter，::selection）

颜色模式rgba、hsla

text-shadow: h-shadow v-shadow blur color;

box-sizing: content-box(border-box);

border-radius:100px 0px 0px 0px/20px 0px 0px 0px;

box-shadow: h-shadow v-shadow blur spread color inset;

线性渐变：background: linear-gradient(direction, color-stop1, color-stop2, ...);

重复的线性渐变：background: repeating-linear-gradient(red, yellow 10%, green 20%); 

径向渐变和重复的径向渐变：background: radial-gradient(shape, shape size, at position, start-color, ..., last-color);

background-image: radial-gradient(ellipse farthest-corner at 45px 45px , #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%);

background-repeat:space(round);

background-attachment:local(背景相对于元素内容固定);

background-size:cover(contain, x y);

background-origin:border-box(padding-box, content-box);

background-clip:border-box(padding-box, content-box);

边框图片本质是背景不会影响元素内容的放置

border-image：source slice/width/outset repeat;

过渡

transition: property duration timing-function delay;

transform:translate(x,y);   scale(x,y)  rotate(angle)   skew(x-angle,y-angle)   perspective

transform-origin: x-axis y-axis z-axis; 

动画

animation: name duration timing-function delay iteration-count direction;

```
@keyframes myfirst
{
from {background: red;}
to {background: yellow;}
}

@keyframes myfirst
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue;}
100% {background: green;}
}
```
多列布局
column-count、column-width、column-gap、column-rule、column-span

[flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html "阮一峰")



