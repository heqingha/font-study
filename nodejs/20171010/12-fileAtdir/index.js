// 打印当前目录下所有文件
const fs = require('fs');
const path = require('path');
require('../utils/proto.js');

// 获取所传目录（没传就默认当前目录）
// console.log(process.argv);

const targetPath = path.join(__dirname, '../', process.argv[2] || './12-fileAtDir');
console.log(targetPath);

fs.readdir(targetPath, (err, files) => {
    if (err) { console.log(err); return; }
    
    console.log(files);    
    if (files && files.length) {
        console.log('修改时间\t 文件大小\t 文件名');
        files.forEach(file => {
            // console.log(path.join(target, file));
            // console.time(file);
            // 异步操作会出现文件不按顺序展示，会受文件大小影响
            fs.stat(path.join(targetPath, file), (err, stats) => {
                console.log(`${stats.mtime.format('yyyy/MM/dd HH:mm:ss')}\t ${stats.size}\t ${file}`);
            });
            // console.timeEnd(file);
        });
    }
});

