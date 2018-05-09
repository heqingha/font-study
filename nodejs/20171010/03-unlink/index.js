// 删除
const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, '../01-write/index.txt');
// console.log(filename);

fs.unlink(filename, (err) => {
    if (err) throw err;
    console.log('成功删除 ../01-write/index.txt');
});