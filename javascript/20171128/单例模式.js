var Conf = (function() {
    var conf = {
        MAX_NUM: 100,
        MIN_NUM: 1,
        COUNT: 1000
    }
    return {
        get: function(name) {
            return conf[name] ? conf[name] : null
        }
    }
})()
var COUNT = Conf.get('COUNT')

// 惰性载入单例
var LazySingle = (function() {
    // 单例实例引用
    var instance = null;
    // 单例
    function Single() {
        // 这里定义私有属性和方法
        return {
            publicMethod: function() {},
            punlicProperty: '1.0'
        }
    }
    // 获取单例对象接口
    if(!instance) {
        instance = Single()
    }
    // 返回单例
    return instance;
} )()

console.log(LazySingle().punlicProperty);  // 1.0