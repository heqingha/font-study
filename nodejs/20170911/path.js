const path = require('path');

/**
 * 路径解析，得到规范化的路径格式
 
const normalizePath = path.normalize(__dirname + '/a/b/../c//d.txt');
console.log(normalizePath);
*/




/**
 * 路径结合、合并，路径最后不会带目录分隔符
 * path.join([path1],[path2]..[pathn]);
 * [path1] 路径或表示目录的字符
 
const path1 = 'path1',
      path2 = 'path2//pp\\',
      path3 = '../path3';
const joinPath = path.join(path1, path2, path3);
console.log(joinPath);
*/ 




/**
 * 获取绝对路径
 * path.resolve(path1, [path2]..[pathn]);
 * 以应用程序为起点，根据参数字符串解析出一个绝对路径
 * path 必须至少一个路径字符串值
 * [pathn] 可选路径字符串
 
const resolvePath = path.resolve('path1', 'path2', 'a/b\\c/');
console.log(resolvePath);
*/





/**
 * 获取相对路径
 * path.relative(from, to);
 * 获取两路径之间的相对关系
 * from 当前路径，并且方法返回值是基于from指定到to的相对路径
 * to   到哪路径，
 
const fromPath = 'c:/from/a', 
      toPath = 'c:/test/b';

const relativePath = path.relative(fromPath, toPath);
console.log(relativePath);  //../../test/b; 表示从from到to的相对路径
*/




/**
 * 获取路径中目录名
 
var dirPath = path.dirname(__dirname + '/test/util-you.mp3');
console.log(dirPath);
*/





/**
 * 获取路径中的扩展名，如果没有'.'，则返回空
 
const fielPath = path.join(__dirname + '/test/util-you.mp3');
const extPath = path.extname(fielPath);
console.log(extPath);
*/





/**
 * 获取路径中文件名,后缀是可选的，如果加，请使用'.ext'方式来匹配，则返回值中不包括后缀名；
 
const fielPath = path.join(__dirname + '/test/util-you.mp3');
const extPath = path.extname(fielPath);
const basePath = path.basename(fielPath);
const baseNoExtPath = path.basename(fielPath, extPath);
console.log(basePath);
console.log(baseNoExtPath);
*/




/**
 * 文件路径转为对象
 * 对象转为文件路径
 
const filename = path.join(__dirname, '/test/a/b/c.txt');
const parsePath = path.parse(filename);
console.log(parsePath);
const formatPath = path.format(parsePath);
console.log(formatPath);
*/



/**
 * 判断是否是绝对路径

const filename = path.join(__dirname, '/test/a/b/c.txt');
console.log(path.isAbsolute(filename));
console.log(path.isAbsolute('./test'));
 */




/**
 * 获取环境变量
  
console.log(process.env);
*/




/**
 * win32
 
console.log(path.win32);
*/




/**
 * posix
 
console.log(path.posix);
*/





/**
 * 返回操作系统中文件分隔符； window是'\\', Unix是'/'
 
console.log(path.sep);
*/





/**
 * 返回操作系统中目录分隔符，如window是';', Unix中是':'
 
console.log(path.delimiter);
console.log('delimiter split', process.env.PATH.split(path.delimiter));
*/




