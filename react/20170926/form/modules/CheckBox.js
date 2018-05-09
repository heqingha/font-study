import React, { Component } from 'react';
class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            coffee: ['Cappuccino'],
        };
    }
    handleChange(e) {
        const { checked, value } = e.target;
        let { coffee } = this.state;
        if (checked && coffee.indexOf(value) === -1) {
            coffee.push(value);
        } else {
            coffee = coffee.filter(i => i !== value);
        }
        this.setState({
            coffee,
        });
    }
    render() {
        const { coffee } = this.state;
        return (
        	<div>
            <p> 请选择你最喜欢的咖啡： </p>
            <label>
            <input type = "checkbox" value = "Cappuccino"
            checked = { coffee.indexOf('Cappuccino') !== -1 } onChange = { this.handleChange }/>
            Cappuccino </label> <br />
            <label>
            <input type = "checkbox" value = "CafeMocha"
            checked = { coffee.indexOf('CafeMocha') !== -1 } onChange = { this.handleChange } />
            CafeMocha </label> <br />
            <label>
            <input type = "checkbox" value = "CaffeLatte"
            checked = { coffee.indexOf('CaffeLatte') !== -1 } onChange = { this.handleChange } />
            Caffè Latte </label> <br />
            <label>
            <input type = "checkbox" value = "Machiatto"
            checked = { coffee.indexOf('Machiatto') !== -1 } onChange = { this.handleChange } />
            Machiatto </label>
          </div>
        );
    }
}
export default CheckBox
