## 结构型设计模式

> 结构型设计模式关注于如何将类或者对象组合成更大，更复杂的结构，以简化设计。

### 套餐服务---外观模式

> 外观模式（Facade）：为一组复杂的子系统接口提供一个更高级的统一接口，通过这个接口，使得对子系统接口的访问更容易，在Javascript中有时也会用于对底层结构兼容性做统一封装来简化用户使用。

```
// 外观模式实现
//提供一个更简单的高级接口，简化了我们对复杂的底层接口不统一的使用要求
function addEvent(dom, type, fn) {
    if(dom.addEventListener) {
        dom.addEventListener(type, fn, false)
    } else if(dom.attachEvent){
        dom.attachEvent('on'+type, fn)
    } else {
        dom['on'+type] = fn;
    }
}

// 使用
var DOM = document.getElementById('dom');
addEvent(Dom, 'click', function() {
    // 绑定的第一个事件
    console.log('绑定的第一个事件')
})
addEvent(Dom, 'click', function() {
    // 绑定的第一个事件
    console.log('绑定的第二个事件')
})

// 获取事件对象
var getEvent = function (event) {
    // 标准浏览器返回event  IE window.event
    return event || window.event;
}
// 获取元素
var getTarget = function(event) {
    var event = getEvent(event);
    // 标准浏览器下event.target  IE下event.srcElement
    return event.target || event.srcElement;
}
// 阻止默认行为
var preventDefault = function (event) {
    var event = getEvent(event);
    // 标准浏览器
    if(event.preventDefault) {
        event.preventDefault
    } else {
        // IE
        event.returnValue = false;
    }
}
//使用
document.onclick = function (e) {
    preventDefault(e);
    if(getTarget(e) === Dom) {
        // do somethihng
    }
}
```
> 总结：外观模式是对接口方法的外层包装，以供上层代码调用以供上层代码使用，因此有时外观模式封装的接口方法不需要接口的具体实现，只需要按照接口使用规则使用即可，这也是对系统与使用者之间的一种松散耦合，使得系统与使用者之间不会因结构的变化而相互影响。

### 水管弯弯---适配器模式

> 适配器模式(Adapter): 将一个类（对象）的接口（方法或属性）转化成另外一个接口，以满足用户需求，使类（对象）之间接口的不兼容问题通过适配器得以解决。

> 生活中的适配器两根垂直相交的水管连接处的的直角弯管，使得两个不同方向的水管可以疏通流水，三角插头手机充电器对于两项插头是不可用的，此时需要一个三项转两项插头电源适配器等等，这些都是适配器。代码写适配器，其实就是为两个代码库所写的代码兼容运行而书写的额外代码，有了这样的适配器，你就不需要特意地重写以前的功能代码了。

> jQuery适配器

某框架A和jQuery代码书写风格很像，加载完jQuery框架后写一个适配器，将我们已有的功能适配到jQuery，假如代码中有两个事件
，一个加载，一个点击，不过这两个事件与jQuery中的写法很像，所以做的改动不会太大，我们的适配器的主要任务是适配两种代码库中不兼容的代码，那么首当其冲的就是全局对象A与jQuery了，

```
window.A = A = jQuery;
```
> 适配异类框架

如果两个框架直接相差太大，对于这种异类框架适配情况就复杂多了，

```
// 定义框架
var A = A|| {}
A.g = function(id) {
    return document.getElementById(id)
}
// 为元素绑定事件
A.on= function(id, type, fn) {
    // 如果传递参数是字符串则以id处理，负责以元素对象处理，
    var dom = typeof id === 'string' ? this.g(id) : id;
    // 标准dom2级添加事件方式
    if(dom.addEventListener) {
        dom.addEventListener(type, fn, false)
    } else if(dom.attachEvent){
        dom.attachEvent('on'+type, fn)
    } else {
        dom['on'+type] = fn;
    }
}
// 使用
A.on(window, 'load', function() {
    A.on('dom', 'click', function() {
        // do something
    })
})
// 引入jQuery来换A库
A.g = function(id) {
    // 通过jQuery获取jQuery对象，然后返回第一个成员
    return $(id).get(0)
}
A.on = function(id, type, fn) {
    // 如果传递参数是字符串则以id处理，否则以元素对象处理，
    var dom = typeof id === 'string' ? $('#' + id) : $(id);
    dom.on(type, fn);
}
// 通过适配器发现如果两种框架的比较相似，适配比较容易，否则写起来复杂很多，因此尽量引入相似框架。
```

> 参数适配器

适配器还有很多用途，比如方法需要传递多个参数
```
function dosomething(name, title, age, color, size, prize) {
    // 记住参数顺序是很困难的，因此我们经常以一个参数对象方式传入
}
var obj = {
    name: name,
    title: title
    ...
}
function dosomething(obj) {}
// 然而调用的时候不知道传递的参数是否完整，如有一些必须参数没有传入，一些参数是有默认值得等等，此时我们通常的做法是用适配器来适配传入的这个参数对象

function doSomething(obj) {
    var _adapter = {
        name: 'me',
        title: '设计模式'，
        age: 24,
        ...
    }
    for(var i in _adapter) {
        _adapter[i] = obj[i] || _adapter[i];
        // 或者 extend(_adapter, obj)   //  此时可能会多添加属性
        // do something
    }
} 
```
> 数据适配

```
var arr = ['javascript',20,'时间'， ‘日期’]
// 我们发现数组中的每个成员代表的意义不同，这种数据结构语义不好，我们通常会将其适配成对象形式，
var obj = {
    name: '',
    age: '',
    time: '',
    data: ''
}
function arrToObjAdapter() {
    return {
        name: arr[0],
        age: arr[1]
        ...
    }
}
// 使用
var adapterData = arrToObjAdapter(arr);
console.log(adapterData)  // {name: 'javascript', age: 20, ...}

```
> 服务器端数据适配

它解决了前后端的数据依赖，前端程序不在为后端传递的数据所束缚，如果后端因为架构改变导致传递的数据结构发生变化，我们只需要写个适配器就可以放心了，如果后端的数据经常变化，无法控制数据的格式，那么我们在dosomething时最好不要直接调用，最好先将传递过来的数据适配成对我们可用的数据在使用。

```
// 为简化模型这里使用jQuery的ajax方法，理想数据是一个一维数组
function ajaxAdapter(data) {
    // 处理数据并返回新数据
    return [data['key1'], data['key2'], ...]
}
$.ajax({
    url: '...',
    // ...
    success: function(data) {
        if(data) {
            doSomethin(ajaxAdapter(data))
        }
    }
})
// 如果以后后端数据有任何变化我们只需相应的更改ajaxAdapter适配器转换格式
```
> 总结：传统设计模式中，适配器模式往往是适配两个类接口不兼容的问题，然而在JavaScript中，适配器的应用范围更广，比如适配两个代码库，适配前后端数据等等。JavaScript中的适配器的应用，更多应用在对象之间，为了使对象可用，通常我们会将对象拆分并重新包装，这样我们就要了解适配对象的内部结构，这也是与外观模式的区别所在，当然适配器模式同样解决了对象之间的耦合度。包装的适配器代码增加了一些资源开销，当然这是微乎其微的。

### 牛郎织女---代理模式

> 代理模式（Proxy）:由于一个对象不能直接应用另一个对象，所以需要通过代理对象在这两个对象之间起到代理作用。

由于用户相册模块上传的照片量越来越大，导致服务器端需要将图片上传模块重新部署到另外一个域，这样对于前端来说，用户上传图片的请求路径发生变化，指向其他服务器，这就导致了跨域问题。

> 跨域

> 站长统计

> JSONP

> 代理模板

### 房子装饰---装饰者模式

> 装饰者模式（Decorator）:在不改变原对象的基础上，通过对其进行包装扩展（添加属性或者方法）使原有对象可以满足用户的更复杂需求。

静止是相对的，运动是绝对的，所以没有一成不变的需求。

？？ 情景：给页面所以input添加一个点击隐藏文案提示，注意不要覆盖原有的事件。

```
var input1 = doucument.getElementById('input1')
input1.onclick = function() {
    // do something
}
var input2 = doucument.getElementById('input2')
input2.onclick = function() {
    // do something
}
...很多的input
```

以上这种解决方法，由于输入框太多，寻找与修改麻烦,所以试试装饰者模式吧！

> 装饰已有的功能对象

```
var decorator = function(input, fn) {
    // 获取事件源
    var input = doucument.getElementById(input);
    // 若事件源已经绑定事件
    if(typeof input.onclick === 'function') {
        // 缓存事件源原有事件函数
        var oldClickFn = input.onclick;
        input.onclick = function() {
            // 事件源原有回调函数
            oldClickFn();
            // 执行事件源添加新增回调函数
            fn();
        }
    } else {
        input.onclick = fn;
    }
    // do something
}
// 使用
decorator（‘input1’, function() {
    // do something
}）
decorator（‘input2’, function() {
    // do something
}）

```
> 装饰者模式和适配器模式都是对一个对象的修饰来适配其他对象，二者不同，适配器模式是对原有对象适配，添加的方法与原有方法功能上大致相似，装饰者模式提供的方法与原来的方法是有一定区别的，还有最重要的一点是适配器模式新增的方法要调用原来的方法，要了解原有方法具体的细节，而装饰者模式不需要了解对象原有的功能，原方法原封不动的使用。

> 总结：装饰模式是一种可以在不了解原有功能的基础上对功能拓展，装饰者模式对对象的拓展是一种良性拓展，不用了解其具体实现，只是在外部进行了一次封装拓展，是对原有功能完整性的一种保护。

### 城市间的道路---桥接模式

> 桥接模式（Bridge）：在系统沿着多个维度变化的同时，又不增加其复杂度并已达到解耦。

有时候页面中的一些小小细节改变常常因逻辑相似导致大片臃肿的代码，让页面苦涩不堪。

问题：给页面导航栏添加鼠标滑过特效，区别：每个鼠标滑过的效果不一样。。。

```
var nav = document.getElementByTagName('span');
// 不同的绑定不同效果
nav[0].onmouserover = function() {
    this.style.color = 'red';
    this.style.background = 'green';
}
nav[0].onmouserout = function() {
    this.style.color = '#fff';
    this.style.background = '#ccc';
}

nav[1].onmouseover = function() {
    this.getElementsByTagName('strong')[0]style.color = '#fff';
    this.getElementsByTagName('strong')[0]style.background = '#ccc';
}
nav[1].onmouseout = function() {
    this.getElementsByTagName('strong')[0]style.color = 'red';
    this.getElementsByTagName('strong')[0]style.background = 'blue';
}

```
缺点：功能能实现，但是代码冗余。
解决方法：提取共同点，，对相同的逻辑做抽象提取处理，解除与事件中this的耦合。

```
function changeColor(dom, color, bg) {
    dom.style.color = color;
    dom.style.background = bg;
}

```

下一步：事件与业务逻辑之间的桥梁---桥接模式

对于事件桥接方法，可以用一个匿名函数来代替，否则直接将changeColor作为事件的回调函数，解除this耦合。

```
nav[0].onmouserover = function() {
    changeColor(this, 'red', '#fff');
}
```

这种方法是以新增一个桥接函数为代价实现的。

> 多元化对象

桥接模式对于多维的变化也同样适用，

```
function Speed(x, y) {
    this.x = x;
    this.y = y;
}
Speed.prototype.run = function() {
    // do something
}

function Color(cl) {
    this.cl = cl;
}
Color.prtotype.draw = function() {
    // do something
}
...

function Ball(x, y ,c) {
    this.speed = new Speed(x, y);
    this.color = new Color(c);
}
Ball.prototype = function() {
    this.speed.run();
    this.color.draw();
}
```
总结：桥接模式主要特点：将实现层（如元素绑定的事件）与抽象层（如修饰页面UI逻辑）解耦分离，使两部分可以独立变化，由此可以看出桥接模式主要是对结构之间的结构，而抽象工厂模式与创建者模式主要业务在于创建，通过桥接模式实现的解耦，使实现层与抽象层分开处理，避免需求的改变造成对象内部的修改，体现了面向对象对扩展的开放及对修改的关闭原则。当然由于桥接的添加，有时也造成开发成本的增加，有时性能上也会受到影响。

### 超值午餐---组合模式

> 组合模式（Composite）:又称部分-整体模式，将对象组合成树形结构以表示‘整体部分’的层次结构，组合模式使得用户对单个对象和组合对象的使用具有一致性。

### 城市公交车---享元模式

> 享元模式（Flyweight）运用共享技术有效地支持大量的细粒度的对象，避免对象间拥有相同内容造成多于的开销。

总结：享元模式的应用目的是为了提高程序的执行效率与系统的性能，因此在大型系统开发中应用是比较广泛的，百分之一的效率提成有时可以发生质的改变，它可以避免程序中的数据重复，

































