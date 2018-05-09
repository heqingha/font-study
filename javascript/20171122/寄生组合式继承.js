// 寄生式继承  继承原型
// 传递参数  SuperClass  父了
// 传递参数  SubClass    子类

function inheritObject(o) {
    // 声明一个过渡函数对象
    function F() {}
    F.prototype = o;
    return new F();
}
function inheritPrototype(SubClass, SuperClass) {
    // 复制一份父类的原型副本保存在变量中
    var p = inheritObject(SuperClass.prototype);
    // 修正因为重写子原型导致子类的constructor属性被修改
    p.constructor = SubClass;
    // 设置子类的原型
    SubClass.prototype = p;
} 
function SuperClass(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green']
}
SuperClass.prototype.getName = function() {
    console.log(this.name)
}
function SubClass(name, time) {
    // 构造函数继承
    SuperClass.call(this, name)
    this.time = time
}
// 寄生式继承父类原型
inheritPrototype(SubClass, SuperClass)
SubClass.prototype.getTime = function() {
    console.log(this.time)
}
// 创建两个测试方法
var instance1 = new SubClass('js book', 2017);
var instance2 = new SubClass('css book', 2018);

instance1.colors.push('black')
console.log(instance1.colors)
console.log(instance2.colors)
instance2.getName();
instance2.getTime();




    