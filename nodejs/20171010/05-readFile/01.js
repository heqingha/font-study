// 读取文件
'use strict';

const fs = require('fs');

console.log('>>>>  BEGIN >>>>');

fs.readFile(__dirname + '/01.txt', 'utf-8', (err, data) => {
  if (err) { console.log(err); return; }
  console.log(data);
});

console.log('>>>>  END >>>>');

