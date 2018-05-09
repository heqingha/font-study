const fs = require('fs');
const path = require('path');

try {
    const filename = path.join(__dirname, '../02-writeSync/index.txt');
    fs.unlinkSync(filename);
    console.log('成功删除 ../02-writeSync/index.txt');
} catch (err) {
    console.log(err);
}