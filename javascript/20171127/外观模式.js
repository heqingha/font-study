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




