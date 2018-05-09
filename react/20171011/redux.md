# redux

标签（空格分隔）： react

---
## Redux运作流程
![流程](http://chuantu.biz/t6/83/1507358482x1944864576.png)

## Redux 三大原则
### 1. 单一数据源
**传统：**
传统的 MVC 架构中，我们可以根据需要创建无数个 Model，而 Model 之间可以互相监听、触发事件甚至循环或嵌套触发事件，这些在 Redux 中都是不允许的。
**Redux：**
在 Redux 的思想里，一个应用永远只有唯一的数据源.，使用单一数据源的好处在于整个应用状态都保存在一个对象中，这样我们随时可以提取出整个应用的状态进行持久化
### 2. 状态是只读的
在 Redux 中，我们并不会自己用代码来定义一个store。取而代之的是，我们定义一个 reducer，它的功能是根据当前触发的action对当前应用的状态（state）进行迭代，这里我们并没有直接修改应用的状态，而是返回了一份全新的状态。
Redux 提供的 createStore方法会根据reducer生成store。最后，我们可以利用 store. dispatch方法来达到修改状态的目的。
### 3. 状态修改均由纯函数完成
在 Redux 里，我们通过定义 reducer 来确定状态的修改，而每一个 reducer 都是纯函数，这意味着它没有副作用，即接受一定的输入，必定会得到一定的输出。
这样设计的好处不仅在于reducer里对状态的修改变得简单、纯粹、可测试，更有意思的是，Redux利用每次新返回的状态生成酷炫的时间旅行（time travel）调试方式，让跟踪每一次因为触发action而改变状态的结果成为了可能。

## Redux核心API
1. const store = createStore(reducers[, initialState])
2. store.getState()：获取 store 中当前的状态。
3. store.dispatch(action)：分发一个action，并返回这个action，这是唯一能改变 store 中数据的方式。
4. store.subscribe(listener)：注册一个监听者，它在 store 发生变化时被调用。
5. store.replaceReducer(nextReducer)：更新当前 store 里的 reducer，一般只会在开发模式中调用该方法。

## react-redux
react-redux 提供了一个组件和一个 API 帮助 Redux 和 React 进行绑定，一个是 React 组件 Provider ，一个是 connect()。
1. Provider 接受一个 store 作为props，它是整个 Redux 应用的顶层组件.
2. connect() 提供了在整个 React 应用的任意组件中获取 store 中数据的功能。

## middleware
1. 流程
![同步](http://chuantu.biz/t6/83/1507359828x2890149518.png)
![异步](http://chuantu.biz/t6/83/1507359863x2890149518.png)

2. 中间件原理分析
[文章1](https://zhuanlan.zhihu.com/p/21391101)
[文章2](https://zhuanlan.zhihu.com/p/20597452)

## Redux与组件
### 1. 容器型组件

> 容器型组件，意为组件是怎么工作的，更具体一些就是数据是怎么更新的。它不会包含任何Virtual DOM 的修改或组合，也不会包含组件的样式。
如果映射到 Flux 上，那么容器型组件就是与store作绑定的组件。如果映射到 Redux 上，那么容器型组件就是使用connect的组件。因此，我们都在这些组件里作了数据更新的定义。


### 2. 展示型组件

> 展示型组件，意为组件是怎么渲染的。它包含了Virtual DOM的修改或组合，也可能包含组件的样式。同时，它不依赖任何形式的 store。一般可以写成无状态函数，但实际上展示型组件并不一定都是无状态的组件，因为很多展示型组件里依然存在生命周期方法。

### 3. 对比
![对比](http://chuantu.biz/t6/73/1506741269x1944864576.png)

4. 组件类型
* Layouts
Layouts 指的是页面布局组件，描述了页面的基本结构，目的是将主框架与页面主体内容分离。它常常是无状态函数，传入主体内容的 children 属性。路由里Layout组件就是设置在最外层 Route 中的 component里。

    ```
    const Layout = ({ children }) => (
    <div className='container'>
    <Header />
    <div className="content">
    {children}
    </div>
    </div>
    );
    ```
    
* Views
Views 指的是子路由入口组件，描述了子路由入口的基本结构，包含此路由下所有的展示型组件。为了保持子组件的纯净，我们在这一层组件中定义了数据和 action的入口，从这里开始将它们分发到子组件中去。因此**Views 就是 Redux 中的容器型组件**

    ```
    @connect((state) => {
    //...
    })
    class HomeView extends Component {
    render() {
        const { sth, changeType } = this.props;
        const cardProps = { sth, changeType };
        return (
        <div className="page page-home">
            <Card {...cardProps} />
        </div>
        );
    }
    }
    ```
    
* Components
顾名思义，Components就是末级渲染组件，描述了从路由以下的子组件。它们包含具体的业务逻辑和交互，但所有的数据和 action 都是由 Views 传下来的，这也意味着它们是可以完全脱离数据层而存在的展示型组件

    ```
    class Card extends Components {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(opts) {
        const { type } = opts;
        this.props.changeType(type);
    }
    render() {
        const { sth } = this.props;
        return (
        <div className="mod-card">
        <Switch onChange={this.handleChange}>
        // ...
        </Switch>
        {sth}
        </div>
    );
    ```

## [例子](https://github.com/xiaowangmm2/react-demo/tree/master/react-redux-router)
## 参考链接
[阮一峰-Redux基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
[阮一峰-中间件与异步操作](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)
[阮一峰-React-Redux的用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)
[中间件1](https://zhuanlan.zhihu.com/p/21391101)
[中间件2](https://zhuanlan.zhihu.com/p/20597452)




