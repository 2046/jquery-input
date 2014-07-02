jquery-input
============

## 描述
监控输入框变化的Jquery插件

## 使用
```javascript
<script src="js/jquery-input.js"></script>
```

## 例子
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script src="js/jquery.js"></script>
  <script src="js/jquery-input.js"></script>
</head>
<body>
  <input id="text" type="text">
  <script>
    $('#text').input(function(){
      // balabala.....
      // this is Jquery element
      console.log(this.val());
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