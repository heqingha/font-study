# react-stydy2

标签（空格分隔）： react

---

## 四、React组件
### 1. 狭义上的组件，UI组件。

**说明**：组件主要围绕在交互动作上的抽象，针对这些交互动作，利用 `JavaScript 操作 DOM 结构或 style 样式`来控制。一般会有 3 个部分组件：`结构、样式和交互行为`

* [其他知识点Class](http://es6.ruanyifeng.com/#docs/class)
* demo实例（详见demo）
* 规范标准组件的信息
    * **基本的封装性**。尽管说JavaScript没有真正面向对象的方法，但我们还是可以通过实例化的方法来制造对象。
    * **简单的生命周期呈现**。最明显的两个方法 constructor 和 destroy，代表了组件的挂载和卸载过程。但除此之外，其他过程（如更新时的生命周期）并没有体现。
    * **明确的数据流动**。这里的数据指的是调用组件的参数。一旦确定参数的值，就会解析传进来的参数，根据参数的不同作出不同的响应，从而得到渲染结果。
* mvc架构的演变，模板引擎的加入，可以解决view层
* 弊端：通过改变 class 控制 style 来显示或隐藏。这样的逻辑一旦复杂，就存在大量的 DOM 操作，
开发及维护成本相当高。


### 2. 广义上的组件，带有业务含义和数据的 UI 组件组合


这类组件不仅有交互动作，更重要的是有`数据与界面之间的交互`。

* Web Components
* react组件： React组件基本上由3个部分组成——属性（props）、状态（state）以及生命周期方法
**说明**：React 组件可以接收参数，也可能有自身状态。一旦接收到的参数或自身状态有所改变，React组件就会执行相应的生命周期方法，最后渲染。整个过程完全符合传统组件所定义的组件职责。
    ![组件](http://chuantu.biz/t6/46/1505202253x1944864576.png)
* 对比
    * React 自定义元素是库自己构建的，与 Web Components 规范并不通用；
    * React 渲染过程包含了模板的概念，即 1.2 节所讲的 JSX；
    * React 组件的实现均在方法与类中，因此可以做到相互隔离，但不包括样式；
    * React 引用方式遵循 ES6 module 标准。

### 3. react组件创建

* React.createClass

```
const Button = React.createClass({
 getDefaultProps() {
   return {
  color: 'blue',
  text: 'Confirm',
   };
  },

 render() {
   const { color, text } = this.props;

   return (
  <button className={`btn btn-${color}`}>
    <em>{text}</em>
  </button>
   );
  }
});
```

* ES6 classes

```
import React, { Component } from 'react';

class Button extends Component {
 constructor(props) {
   super(props);
  }

 static defaultProps = {
   color: 'blue',
  text: 'Confirm',
  };

 render() {
   const { color, text } = this.props;

   return (
  <button className={`btn btn-${color}`}>
    <em>{text}</em>
  </button>
   );
  }
}
```

* 无状态函数(无状态组件)

它不存在 state，也没有生命周期方法,无状态组件。不像上述两种方法在调用时会创建新实例，它`创建时始终保持了一个实例`，避免了不必要的检查和内存分配，做到了内部优化。

```
function Button({ color = 'blue', text = 'Confirm' }) {
 return (
   <button className={`btn btn-${color}`}>
  <em>{text}</em>
   </button>
  );
}
```

* es6与es5差异
![差异](http://chuantu.biz/t6/47/1505266423x2890149518.png)

## 五. react数据流

* 概念

> 在 React 中，数据是自顶向下单向流动的，即从父组件到子组件。这条原则让组件之间的关系变得简单且可预测。
>
state 与 props 是 React 组件中最重要的概念。如果顶层组件初始化 props，那么 React会向下遍历整棵组件树，重新尝试渲染所有相关的子组件。而 state只关心每个组件自己内部的状态，这些状态只能在组件内改变。把组件看成一个函数，那么它接受了props作为参数，内部由 state 作为函数的内部参数，返回一个 Virtual DOM 的实现。

* state
* props


## 六. react生命周期

* [当组件在挂载或卸载时](#render)
* [当组件接收新的数据时，即组件更新时](#update)

![qqq](http://chuantu.biz/t6/47/1505265743x2890174297.png)

### 组件挂载、卸载

```
import React, { Component, PropTypes } from 'react';

class App extends Component {
 static propTypes = {
  // 挂载过程 执行一次
  };

 static defaultProps = {
  // 挂载过程 执行一次
  };

 constructor(props) {
 // 挂载过程 执行一次
   super(props);

   this.state = {
  // ...
   };
  }

 componentWillMount() {
 // if setState 挂载过程 render一次
  }
 componentDidMount() {
 // if setState 挂载过程 render两次
  }
 componentWillUnmount() {
  // 卸载过程执行
  // 我们常常会执行一些清理方法，如事件回收或是清除定时器。
  }
 render() {
   return <div>This is a demo.</div>;
  }

}
```
<span id="update"></span>

### 数据更新过程
说明：更新过程指的是父组件向下传递 props或组件自身执行setState 方法时发生的一系列更新动作。

```
import React, { Component, PropTypes } from 'react';

class App extends Component {
 componentWillReceiveProps(nextProps) {
 // this.setState({})
  }

 shouldComponentUpdate(nextProps, nextState) {
 // return true;
  }

 componentWillUpdate(nextProps, nextState) {
 // 不能执行 setState
  }

 componentDidUpdate(prevProps, prevState) {
 // ...
  }

 render() {
   return <div>This is a demo.</div>;
  }
}
```
1. state更新

如果组件自身的 state更新了，那么会依次执行shouldComponentUpdate、componentWillUpdate 、render 和 componentDidUpdate。

2. shouldComponentUpdate

shouldComponentUpdate 是一个特别的方法，它接收需要更新的 props 和 state，让开发者增加必要的条件判断，让其在需要时更新，不需要时不更新。因此，当方法返回false的时候，组件不再向下执行生命周期方法。

## 七. React 与 DOM

### ReactDOM

1. findDOMNode获取dom

```
componentDidUpdate
componentDidMount() {
 // this 为当前组件的实例
 const dom = ReactDOM.findDOMNode(this);
 }
```

2. refs,组件被调用时会新建一个该组件的实例，而refs就会指向这个实例。无状态组件除外


## 其他 
* [webcomponents阮一峰](http://javascript.ruanyifeng.com/htmlapi/webcomponents.html)
* [webcomponents](http://sentsin.com/web/1089.html)




