// 父类
function SuperClass(name) {
    // this.SuperValue = name;
    this.SuperValue = true;
}

// 为父类原型添加方法

SuperClass.prototype.getSuperValue = function() {
    // alert(1)
    return this.SuperValue;
}

// console.dir(SuperClass)

var supe = new SuperClass();

// console.dir(supe);

// supe.getSuperValue();

// 声明子类

function SubClass() {
    this.subValue = false;
}

// 子类继承父类

SubClass.prototype = new SuperClass();


// 为子类添加共有方法

SubClass.prototype.getSubValue = function() {
    // alert(2)
    return this.subValue;
}

// console.dir(SubClass);


// 子类继承父类SuperValue属性，
// 访问一个对象的属性时，先在基本属性中查找，如果没有，再沿着__proto__这条链向上找，这就是原型链。


var sub = new SubClass();
// var sub = new SubClass('pppp');

// sub.getSuperValue();
// sub.getSubValue();
// console.log(sub.SuperValue);
// console.log(sub.subValue);

console.dir(sub)

console.log(sub instanceof SubClass);
console.log(sub instanceof SuperClass);
console.log(SubClass instanceof SuperClass);
console.log(SubClass.prototype instanceof SuperClass);

// function SuperClass() {
//     this.books = ['javascript', 'html', 'css']
//     this.a = 12
// }
// function SubClass() {}
// SubClass.prototype = new SuperClass()
// var instance1 = new SubClass()
// var instance2 = new SubClass()
// console.log(instance2.books)
// instance1.books.push('设计模式')
// instance1.a = 34
// console.log(instance2.books)
// console.log(instance2.a)








