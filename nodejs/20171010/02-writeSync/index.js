// 同步写入
const fs = require('fs');
const path = require('path');

try {
    const writeFilename = path.join(__dirname, './index.txt');
    const writeContent = 'Hello world!';
    fs.writeFileSync(writeFilename, writeContent);
} catch (error) {
    console.log('index.txt writesync error');
}
