# vue-myprogress

> 基于vue搭配svg的圆形进度条

## 使用方法

``` bash
# install dependencies
npm install vue-myprogress

# use
ES6
import myprogress from 'vue-myprogress'

// 通过use挂载
Vue.use(myprogress)

// 或者直接导入js文件
<script src="./dist/MyProgress.js"></script>

<myprogress 
    :progressnum="progressnum"
    :bgcolor="bgcolor" 
    :fillcolor="fillcolor"
    :diameter="diameter"
    :strokewidth='strokewidth'
    :clockwise="clockwise">
</myprogress>

# 参数说明
progressnum(Number) ：0-1
bgcolor(String) ：轨道背景颜色
fillcolor(String) ：轨道进度条填充颜色
diameter(Number) ：直径
strokewidth(Number) ：进度条宽度
clockwise(Boolean) ：true(顺时针) false(逆时针)
```

[https://github.com/xiaodupeng/vue-myprogress](https://github.com/xiaodupeng/vue-myprogress).
