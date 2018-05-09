// 文件追加
const fs = require('fs');
const path = require('path');

fs.appendFile(path.join(__dirname, '../01-write/index.txt'), JSON.stringify({ b: 1 }), (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log('success');
});