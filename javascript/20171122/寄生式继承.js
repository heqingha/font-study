// 寄生式继承
// 声明基对象
var book = {
    name: 'js book',
    alikeBook: ['css book', 'html book']
}
function inheritObject(o) {
    // 声明一个过渡函数对象
    function F() {}
    F.prototype = o;
    return new F();
}
// var c = new inheritObject(book);
// console.log(c)
function createBook(obj) {
    // 通过原型继承方式创建新对象
    var o = new inheritObject(obj)
    // 拓展新对象
    o.getName = function() {
        console.log(name)
    }
    return o;
}

var a1  = createBook(book)
var a2  = createBook(book)
a1.alikeBook.push('设计模式')
console.log(a1.alikeBook)
console.log(a2.alikeBook)