'use strict';

// 文件写入
const fs = require('fs');
const path = require('path');

// JSON.stringify 序列化
// JSON.parse     反序列化
/**
 * 异步写入-默认覆盖
 */
const writeFilename = path.join(__dirname, './index.txt');
const writeContent = JSON.stringify({ a: 1 });

fs.writeFile(writeFilename, writeContent, (error) => {
    if (error) {
        // 读文件是不存在报错
        // 意外错误
        // 文件权限问题
        // 文件夹找不到（不会自动创建文件夹）
        console.log(error);
        return;
    }
    console.log('success');
});
