'use strict';

const fs = require('fs');

try{
    console.log('>>>>  BEGIN >>>>');
    
    const data = fs.readFileSync(__dirname + '/index.txt', 'utf-8');
    console.log('data: ' + data);
    console.log('bytes: ' + data.length + ' bytes');
    console.log('First three bytes: '+ data[0] + ', ' + data[1] + ', '+ data[2]);

    // Buffer-String
    const str = data.toString('utf-8');
    console.log('Buffer->String: ', str);

    // String-Buffer
    const buf = new Buffer(str, 'utf-8');
    console.log('String->Buffer: ', buf);

    console.log('>>>>  END >>>>');    
} catch(err){
    console.log('出错了', err);
}