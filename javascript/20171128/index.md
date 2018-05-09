## 创建型设计模式

> 创建型设计模式是一类处理对象创建的设计模式，通过某种方法控制对象的创建来避免基本对象创建时可能导致设计上的问题或增加设计上的复杂度。

### 神奇的魔术师---简单工厂模式

> 简单工厂模式，有叫静态工厂方法，由一个工厂对象决定创建某一种产品对象类的实例，主要用来创建同一类对象。

```
//例子  用登录注册提示
var LoginAlert = function(text) {
    this.content = text;
}
LoginAlert.prototype.show = function() {
    alert(this.content)
}
var userNameAlert = new LoginAlert('用户名不能多于16个字母数字')
userNameAlert.show()
var passWordAlert = new LoginAlert('输入的密码不正确')
passWordAlert.show()

var LoginConfirm = function(text) {
    this.content = text;
}
LoginConfirm.prototype.show = function() {
    alert(this.content)
}
var loginFailConfirm = new LoginConfirm('用户名不能多于16个字母数字')
loginFailConfirm.show();


var LoginPrompt = function(text) {
    this.content = text;
}
LoginPrompt.prototype.show = function() {
    alert(this.content)
}
// ...................
```

> 演变，如果类太多，那么提供一个。

上面这种创建方式太多类，优化简单工厂模式。

```
var PopFactory= function(name) {
    switch(name) {
        case 'alert' :
            return new LoginAlert()
        case 'confirm' :
            return new LoginConfirm()
        case 'prompt' :
            return new LoginPrompt()
    }
}
// 这三个类有很多地方是相同的，是可以抽象提取出来共用的，也可用简单工厂方式实现它们。
```

> 一个对象有时也可代替许多类

```
function createPop(type, text) {
    var o = new Object();
    o.content = text;
    o.show= function() {
        // 显示方法
    };
    if(type == 'alert') {
        // 差异部分
    }
    if(type == 'prompt') {
        // 差异部分
    }
    if(type == 'confirm') {
        // 差异部分
    }
    return o;
}
// 调用，创建提示框
var userNameAlert = createPop('alert', '提示文字')
```

### 给我一张名片---工厂方法模式

> 通过对产品类的抽象使其创建业务主要负责用于创建多类产品的实例。

```
// 简单工厂
var Java = function(content) {
    // .......
}
var Php = function(content) {
    // .......
}
var Javascript = function(content) {
    // .......
}
// 学科工厂
function JobFactory(type, content) {
    switch(type) {
        case 'java' : 
            return new Java(content)
        case 'php' : 
            return new Php(content)
        case 'Javascript' : 
            return new Javascript(content)
    }
}
// 测试案例
JobFactory('Javascript', 'content');

```

> 存在问题：若有新的需求，不仅要添加类，还要修改工厂函数。引申相互工厂方法模式，这样以后每需要一个类，只需要添加这个类。

> 工厂方法模式本意是说将实际创建对象工作推迟到子类当中，这样核心类就成了抽象类，不过对应javascript不必这么深究，javascript没有像传统创建抽象类那样的方式轻易创建抽象了类，所以在javascript中实现工厂方法模式我们只需要参考它的核心思想即可，所以我们可以将工厂方法看做是一个实例化对象的工厂类，安全起见，我们采用安全模式类，而我们将创建对象的基类放在工厂方法类的原型中即可。

#### 安全的工厂方法

```
// 安全模式创建的工厂类
var Factory = function(type, content) {
    if(this instanceof Factory) {
        var a = new this[type] (content);
        return s;
    } else {
        return new Factory(type, content);
    }
}
// 工厂原型中设置创建所用类型数据对象的基类
Factory.prototype = {
    Java: function(content) {
        // ....
    },
    javascript: function(content) {
        // ....
    },
    UI: function(content) {
        this.content = content;
        (function(content)) {
            var div = documnet.createElement('div');
            div.innerHTML = content;
            div.style.border = '1pc solid #ccc';
            document.getElementById('container').appendChild(div);
        }
    }(content)
}
var data = [{},{},{}]
data.map(function(item) {
    Factory(item.type, item.content);
})
```
> 优点，如果添加类，只需在Factory.prototype中添加。

### 出现的都是幻觉---抽象工厂模式

> 通过对类的工厂抽象使其业务用于对产品类簇的创建，而不负责创建每一类产品的实例。

抽象工厂模式

```
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

```

> 总结：抽象工厂模式是设计模式中最抽象的一种，也是创建模式中唯一一种抽象化创建模式，该模式创建出的结果不是一个真实的对象实例，而是一个类簇，它制定了类的结构，这也就区别于简单工厂模式创建单一对象，工厂方法模式创建多类对象，当然由于JavaScript中不支持抽象化创建与虚拟方法，所以导致这种模式不能像其他面向对象语言中应用的那么广泛。

### 分即是合---建造者模式

> 将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示。

创建对象的另一种新式：建造者模式

建造者模式更注重的是创建的细节。

### 语言之魂---原型模式

> 用原型实例指向创建对象的类，使用于创建新的对象的类共享原型对象的属性以及方法。

```
function prototypeExtend() {
  var F = function() {},
  args = arguments,
    i = 0,
    len = args.length;
    // console.log(arguments)
  for (; i < len; i++) {
    for (var j in args[i]) {
      F.prototype[j] = args[i][j];
      console.log(F.prototype)
    }
  }
  return new F();
}

var penguin = prototypeExtend(
  {
    speed: 20,
    swim: function() {
      console.log(".......1");
    }
  },
  {
    sd: 300,
    run: function(speed) {
      console.log("......2"+ speed);
    }
  },
  {
    jump: function() {
      console.log(".........3");
    }
  }
);
penguin.swim()
penguin.run(10)
penguin.jump()

```

> 总结：原型模式可以让多个对象分享同一个原型对象的属性和方法，这也是一种继承方式，不过这种继承的实现是不需要创建的，而是将原型对象分享给那些继承的对象，当然有时需要让每个继承对象独立拥有一份原型对象，此时我们就需要对原型对象进行复制。

由此可以看出，原型对象更适合在创建复杂的对象时，对于那些需求一直在变化而导致对象结构不停的改变时，将那些比较稳定的属性与方法共用而提取的继承的实现。

### 一个人的寂寞---单例模式

> 单例模式：有被称为单体模式，是只允许实例化一次的对象类，有时我们也用一个对象来规划一个命名空间，井井有条地管理对象上的属性个方法。

JavaScript中最常见的一种模式，这种模式经常为我们提供一个命名空间，如我们使用过的jQuery库，单例模式就为它提供利润一个命名空间jQuery。

> 命名空间？？？？

就是nameSpace，解决一类问题：为了让代码更易懂，人们常常用单词或者拼音定义变量或者方法，但由于有限的单词量，所以不同的人定义的变量使用的单词名称很有可能重复，此时就需要用命名空间来约束每个人定义的变量来解决这类问题。

```
function g(id) {
    return document.getElementById(id)
}
function css(id, key, value) {
    g(id).style[key] = value;
}
function on(id ,type, fn) {
    g(id)['on' + type] = fn;
}
// ................

// 命名空间
var My = {
    g: function() {
        return document.getElementById(id)
    },
    css: function() {
        this.g(id).style[key] = value;
    },
    on: function() {
        this.g(id)['on' + type] = fn;
    }
}

```
> 单例模式的其他作用：就是通过单例模式来控制自己的每个功能模块。

> 创建一个小型代码库

```
var A= {
    Util: {
        util_1: function() {},
         util_2: function() {}
    },
    Tool: {
        tool_1: function() {},
        tool_2: function() {}
    },
    Ajax: function () {
        ajax_1: function() {},
        ajax_2: function() {}
    }
}

A.Util.util_1();
// ........

```
> 无法修改的静态变量

用单例模式管理静态变量

```
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

```
> 惰性单例

有时候对于单例对象需要延迟创建，所以在单例中还存在一种延迟创建的形式，有人也称之为‘惰性创建’。

```
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

```










