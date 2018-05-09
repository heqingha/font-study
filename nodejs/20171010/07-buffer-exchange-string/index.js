// Buffer对象转换成String：
var str = data.toString('utf-8');
console.log(str);


// String转换成Buffer：
var buf = new Buffer(str, 'utf-8');
console.log(buf);