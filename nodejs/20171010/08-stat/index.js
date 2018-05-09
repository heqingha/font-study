// 事件队列-异步
// 读取文件readFile
const fs = require('fs');
const path = require('path');

console.log('>>>>  BEGIN >>>>');
console.time('filetime');
const file1 = path.join(__dirname, '01.txt');

fs.stat(file1, (err, stat) => {
    if (err) { console.error(err); return }
    // 是否是文件
    console.log('isFile：', + stat.isFile());
    // 是否是目录
    console.log('isDireacory:' + stat.isDirectory());

    if (stat.isFile()) {
        console.log('stat', stat);
        // 文件大小
        console.log('size' + stat.size);
        // 创建时间
        console.log('birth time' + stat.birthtime);
        // 修改时间
        console.log('modified time' + stat.mtime);
        // 文件内容
        fs.readFile(file1, 'utf8', (err, data) => {
            if (err) { console.error(err); return }
            console.info('file1 content ', data);
        });
    }
});

console.timeEnd('filetime');
console.log('>>>>  END >>>>');



