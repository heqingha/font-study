# react-study2

标签（空格分隔）： react

---

## 一、 事件
1. react事件写法与html事件写法区别

* react： onClick={this.handleClick} 驼峰写法 值可以是任意类型
* html: onclick="handleClick()" 小写  值只能是字符串

2. react事件机制
在 React 底层，主要对合成事件做了两件事：事件委派和自动绑定。

* 事件委派
> react事件绑定并不会把事件处理函数直接绑定到真实的节点上，而是把所有事件绑定到**结构的最外层**，使用一个统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数。当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象；当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。这样做简化了事件处理和回收机制，效率也有很大提升。

* 自动绑定

    ```
    1. bind方式
    <button onClick={this.handleClick.bind(this, 'test')}>Test</button>;
    
    2. 双冒号语法
    <button onClick={::this.handleClick}>Test</button>
    
    3. 构造器内声明
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    4. 箭头语法
    const handleClick = (e) => {
        console.log(e);
    };
    ```
    
3. react中使用原生事件
    ```
    import React, { Component } from 'react';
    class NativeEventDemo extends Component {
    
    componentDidMount() {
        this.refs.button.addEventListener('click', e => {
            this.handleClick(e);
        });
    }
    handleClick(e) {
        console.log(e);
    }
    componentWillUnmount() {
    //值得注意的是，在 React中使用DOM原生事件时，一定要在组件卸载时手动移除，否则很可能出现内存泄漏的问题。而使用合成事件系统时则不需要，因为 React 内部已经帮你妥善地处理了。
        this.refs.button.removeEventListener('click');
    }
    render() {
        return <button ref="button">Test</button>;
    }
    }
    ```

4. react事件与原生事件的对比

* 事件机制
原生事件： 可以分为3个阶段：事件捕获阶段、目标对象本身的事件处理程序调用以及事件冒泡。
react事件： 并没有实现事件捕获，仅仅支持了事件冒泡机制

* 事件类型
React 合成事件的事件类型是 JavaScript 原生事件类型的一个子集

* 事件绑定方式
原生：
    ```
    //dom上绑定
    <button onclick="alert(1);">Test</button>
    //属性赋值
    el.onclick = e => { console.log(e); }
    //事件监听函数
    el.addEventListener('click', () => {}, false);
    el.attachEvent('onclick', () => {});
    ```
* 事件对象
原生： IE与现代浏览器有差异
react: 无差异

## 二、表单
1. 注意点
* textarea
JSX 中的 textarea组件与类型为text的input组件的用法很类似。同样有一个 **value prop**用来表示表单的值，而在HTML中textarea的值则是通过**children** 来表示的。
* select
multiple={true}表示多选。在HTML的option组件中需要一个**selected**属性来表示默认选中的列表项，而 React 的处理方式则是通过为select 组件添加 **value prop**来表示选中的option，在设置了multiple={true}的情况下，该value值是一个数组，表示选中的一组值。这一点与textarea的处理方式一致，这在一定程度上统一了接口。

2. React 受控组件更新 state 的流程
* 可以通过在初始 state 中设置表单的默认值。
* 每当表单的值发生变化时，调用 onChange 事件处理器。
* 事件处理器通过合成事件对象e拿到改变后的状态，并更新应用的state
* setState 触发视图的重新渲染，完成表单组件值的更新。

3. 受控组件VS非受控组件
* 非受控组件的状态并不会受应用状态的控制，应用中也多了局部组
件状态，而受控组件的值来自于组件的 state。

## 三、react中样式
1. 行内样式使用对象写法，且属性使用驼峰表达式表示

```
const style = {
    color: 'white',
    backgroundImage: `url(${imgUrl})`,
    // 注意这里大写的 W，会转换成 -webkit-transition
    WebkitTransition: 'all',
    // ms 是唯一小写的浏览器前缀
    msTransition: 'all',
};
const component = <Component style={style} />;
```
2. 数值类的值，不建议写px,默认会加px

## 四、组件通信

1. 父组件向子组件通信
* props
2. 子组件向父组件通信
* 利用回调函
* 利用自定义事件机制
3. 跨级嵌套**（父子）**组件通信（context）
> React 官方并不建议大量使用context，因为尽管它可以减少逐层传递，但当组件结构复杂的时候，我们并不知道context是从哪里传过来的。Context 就像一个全局变量一样，而全局变量正是导致应用走向混乱的罪魁祸首之一，给组件带来了外部依赖的副作用。在大部分情况下，我们并不推荐使用 context。使用context比较好的场景是真正意义上的全局信息且不会更改，例如界面主题、用户信息等。
4. 跨级非嵌套组件通信（事件）

## 五、mixin
1. js类似的实现

```
const mixin = function(obj, mixins) {
    const newObj = obj;
    newObj.prototype = Object.create(obj.prototype);
    for (let prop in mixins) {
        if (mixins.hasOwnProperty(prop)) {
            newObj.prototype[prop] = mixins[prop];
        }
    }
    return newObj;
}
const BigMixin = {
    fly: () => {
    console.log('I can fly');
    }
};
const Big = function() {
    console.log('new big');
};
const FlyBig = mixin(Big, BigMixin);
```
2. react组件实现mixin

```
//createClass官方支持引入mixin
React.createClass({
    mixins: [PureRenderMixin],
    render() {
        return <div>foo</div>;
    }
});
```
* 普通方法：不能有两个同名的方法
* 生命周期方法：会将各个模块的生命周期方法叠加在一起顺序执行

## 六、高阶组件
1. [属性代理](#prop): 高阶组件通过被包裹的 React 组件来操作 props。
2. 反向继承: 高阶组件继承于被包裹的 React 组件

<span id="prop"></span>
```
//从功能上，高阶组件一样可以做到像 mixin 对组件的控制，包括控制 props、通过 refs 使用引用、抽象 state 和使用其他元素包裹 WrappedComponent。
import React, { Component } from 'React';
const MyContainer = (WrappedComponent) =>
    class extends Component {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}
import React, { Component } from 'React';
class MyComponent extends Component {
// ...
}
export default MyContainer(MyComponent);
```
## 七、组件性能优化

[相关文章](https://segmentfault.com/a/1190000006100489)
1. PureRender,immutable

```
import React, { Component } from 'react';
import { is } from 'immutable';
class App extends Component {
    //shouldComponentUpdate->rener->diff dom
    shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {};
        const thisState = this.state || {};
        if (Object.keys(thisProps).length !==                              Object.keys(nextProps).length ||
            Object.keys(thisState).length !==                              Object.keys(nextState).length) {
                return true;
        }
        for (const key in nextProps) {
            if (nextProps.hasOwnProperty(key) &&
                !is(thisProps[key], nextProps[key])) {
                return true;
            }
        }
    for (const key in nextState) {
        if (nextState.hasOwnProperty(key) &&
            !is(thisState[key], nextState[key])) {
            return true;
        }
    }
    return false;
    }
}
```
2. key(唯一值)