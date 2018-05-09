// 流的方式写入
const fs = require('fs');
const path = require('path');

// 创建文件流
const filePath = path.join(__dirname, './index.txt');
const streamWriter = fs.createWriteStream(filePath);

setInterval(() => {
    streamWriter.write('hello\n', () => {
        console.log('+1');
    });
}, 1000);
