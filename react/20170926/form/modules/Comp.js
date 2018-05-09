import React, { Component } from 'react';
class Comp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 'aaa',
            value2: 'aaa'
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //获取非受控元素的值，也可以使用js原生去获取
        const { value } = this.refs.name;
        console.log(value);
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
           <input
            value={this.state.value1}
            onChange={e => {
            this.setState({ value1: e.target.value.toUpperCase() })
            }} />
            {/*对于非受控组件，我们并不需要提供 change 事件*/}
            <input
            ref="name"
            defaultValue={this.state.value2}
            onChange={e => {
            this.setState({ value2: e.target.value.toUpperCase() })
            }} />
            <input type="submit" value="提交"/>
            </form>
        </div>
        );
    }
}
export default Comp
