## 文件操作
Node.js内置的fs模块就是文件系统模块，负责读写文件，提供了异步和同步的方法。
应用程序少不了操作文件，重要！重要！！重要！！！
确定操作没有额外的问题，一定使用绝对路径的方式

## 相关模块
* fs   -基础文件api
* path -提供和路径相关的操作api
* readline -用于读取大文本文件，一行一行的读
* fs-extra(第三方)  -https://www.npmjs.com/package/fs-extra

## 一睹为快
| 操作                  | 含义                     |
|:---------------------|:------------------------ | 
| fs.writeFile         | 异步文件写入               |
| fs.writeFileSync     | 同步文件写入               |
| fs.unlink            | 异步删除文件               |
| fs.unlinkSync        | 同步删除文件               |
| fs.readFile          | 异步文件读取               |
| fs.readFileSync      | 同步文件读取               |
| fs.exists            | 验证路径是否存在（过时）     |
| fs.existsSync        | 验证路径是否存在（过时）     |
| fs.stat              | 获取文件信息               |
| fs.statSync          | 获取文件信息               |
| fs.appendFile        | 异步追加                  |
| fs.appendFileSync    | 同步追加                  |
| fs.createWriteStream | 流的方式进行文件写入        |
| fs.rename            | 移动文件（重命名）          |
| fs.readdir           | 获取目录下文件             |



### 文件异步写入
```
const fs = require('fs');
const path = require('path');

const writeFilename = path.join(__dirname, './index.txt');
const writeContent = JSON.stringify({ a: 1 });
fs.writeFile(writeFilename, writeContent, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log('success');
});
```




### 文件同步写入
```
const fs = require('fs');
const path = require('path');

try {
    const writeFilename = path.join(__dirname, './index.txt');
    const writeContent = 'Hello world!';
    fs.writeFileSync(writeFilename, writeContent);
} catch (error) {
    console.log('index.txt writesync error');
}
```




### 文件异步删除
```
const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname, '../01-write/index.txt');

fs.unlink(filename, (err) => {
    if (err) throw err;
    console.log('成功删除 ../01-write/index.txt');
});
```



### 文件同步删除
```
const fs = require('fs');
const path = require('path');

try {
    const filename = path.join(__dirname, '../02-writeSync/index.txt');
    fs.unlinkSync(filename);
    console.log('成功删除 ../02-writeSync/index.txt');
} catch (err) {
    console.log(err);
}
```




### 文件异步读取
```
'use strict';
const fs = require('fs');
fs.readFile('01.txt', 'utf-8', (err, data) => {
  if (err) { console.log(err); return; }
  console.log(data);
});
```



### 文件同步读取
```
'use strict';
const fs = require('fs');
try{
    const data = fs.readFileSync('index.txt', 'utf-8');
    console.log('文件内容 =>', data);
} catch(err){
    console.log('出错了', err);
}
```



### Buffer和String互相转换
```
// Buffer对象转换成String：
var str = data.toString('utf-8');
console.log(str);


// String转换成Buffer：
var buf = new Buffer(str, 'utf-8');
console.log(buf);
```



### stat
```
// 事件队列-异步
// 读取文件readFile
const fs = require('fs');
const path = require('path');

console.time('filetime');
const file1 = path.join(__dirname, '01.txt');
fs.stat(file1, (err, stat) => {
    if (err) { console.error(err); return }
    // 是否是文件
    console.log('isFile：', + stat.isFile());
    // 是否是目录
    console.log('isDireacory:' + stat.isDirectory());

    if (stat.isFile()) {
        // console.log('stat', stat);
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

console.log('filestart');
console.timeEnd('filetime');
console.log('fileend');
```



### 文件异步追加
```
const fs = require('fs');
const path = require('path');

fs.appendFile(path.join(__dirname, '../01-write/index.txt'), JSON.stringify({ b: 1 }), (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log('success');
});
```