jquery-input
============

## 描述
监控输入框变化的Jquery插件

**在以IE(包括IE)为核心的浏览器中，在回调函数里使用DOM赋值操作，如：`$(el).text('a')`，`$(el).val('a')` 等等，会导致`Ctrl+Z`和鼠标右键撤销功能失效。**

## 使用
```html
<script src="js/jquery-input.js"></script>
```

## 例子
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script src="js/jquery.js"></script>
  <script src="js/jquery-input.js"></script>
</head>
<body>
  <input id="text" type="text">
  <input id="text2" type="text">
  <script>
    $('#text').input(function(){
      // balabala.....
      console.log(this.val()); // this is Jquery element
      $('text2').val('hello'); // 这句代码导致撤销功能在IE系浏览器里不工作
    });
  </script>
</body>
</html>
```

## 支持
 - IE6+
 - Chrome
 - Firefox
 - Safari
 - 360安全浏览器6
 - 世界之窗 3
 - 搜狗高速浏览器
 - 猎豹安全浏览器
 - 360极速浏览器
 - 傲游云浏览器
 - QQ浏览器

## License
The MIT License (MIT)

Copyright (c) 2014 寒飞紫

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
