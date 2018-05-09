// 原型式继承

function inheritObject(o) {
    // 声明一个过渡函数对象
    function F() {}
    F.prototype = o;
    return new F();
}

var book = {
    name: 'js book',
    alikeBook: ['css book', 'html book']
}

var newBook = inheritObject(book)
newBook.name = 'ajax book'

newBook.alikeBook.push('xml books')

var otherBook = inheritObject(book)
otherBook.name = 'flash book'
otherBook.alikeBook.push('as books')
console.log(newBook.name)
console.log(newBook.alikeBook)

console.log(otherBook.name)
console.log(otherBook.alikeBook)

console.log(book.name)
console.log(book.alikeBook)


