// 移动文件、重命名
const fs = require('fs');
const path = require('path');

const currentPath = path.join(__dirname, './02.txt');
const targetPath = path.join(__dirname, './01.txt');

fs.rename(currentPath, targetPath);