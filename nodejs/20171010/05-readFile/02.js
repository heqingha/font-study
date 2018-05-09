// 读取图片
'use strict';

const fs = require('fs');

// 回调函数的data参数将返回一个Buffer对象
fs.readFile(__dirname + '/02.jpg', 'utf-8', (err, data) => {
    if (err) { console.log(err); return; }
    console.log(data.length + ' bytes');
});
