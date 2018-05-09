// 抽象工厂方法
var VericleFactory = function(subType, superType) {
    // 判断抽象工厂中是否有该抽象类
    if(typeof VericleFactory[superType] === 'function') {
        function F() {}
        // 继承父类属性方法
        F.prototype = new VericleFactory[superType]();
        // 将子类constructor指向子类
        subType.constructor = superType;
        // 子类原型继承父类
        subType.prototype = new F();
    } else {
        // 不存在该抽象类抛出错误 
        return new Error('未创建该抽象类')
    }   
}
// 某一个车的抽象类
VericleFactory.Truck = function() {
    this.type = 'truck'
}
VericleFactory.Truck.prototype = {
    getPrice: function() {
        return new Error('抽象方法不可调用')
    },
    getTrainload: function() {
        return new Error('抽象方法不可调用')
    }
}
// 奔驰汽车子类
var BenzTruck = function(price, trainLoad) {
    this.price = price;
    this.trainLoad = trainLoad;
}
// 抽象方法实现对Truck抽象类的继承
VericleFactory(BenzTruck, "Truck");
BenzTruck.prototype.getPrice = function() {
    return this.price;
}
BenzTruck.prototype.getTrainload = function() {
    return this.getTrainload;
}

// 测试
var truck = new BenzTruck(100, 10000);
console.log(truck.getPrice)   // 100
console.log(truck.type)       // truck

