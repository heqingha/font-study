// 构造函数继承
// 声明父类
function SuperClass(id) {
    this.books = ['javascript', 'html', 'css'];
    this.id = id;
}

// 父类声明原型

SuperClass.prototype.showBooks = function() {
    console.log(this.books);
}

// 声明子类

function SubClass(id) {
    // 继承父类
    SuperClass.call(this, id); //this指向SubClass new出来的实例， 传入id到SubClass(id)
}

// 创建第一个子类的实例

var instance1 = new SubClass(11);

// 创建第二个子类的实例

var instance2 = new SubClass(22);

// 验证
instance1.books.push('设计模式');

console.log(instance1.books);

console.log(instance2.books);

console.log(instance1.id);

console.log(instance2.id);
// 由于这种类型的继承没有涉及原型prototype，所以父类的原型方法自然不会被子类继承
console.log(instance1)
console.log(instance2)


