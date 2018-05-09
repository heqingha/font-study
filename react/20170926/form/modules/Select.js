import React, { Component } from 'react';
class Select extends Component {
    constructor(props) {
        super(props);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.state = {
            area1: '',
            area2: ['beijing', 'shanghai'],
        };
    }
    handleChange1(e) {
    		 console.log('--------')
        this.setState({
            area1: e.target.value,
        });
    }
    handleChange2(e){
    	const { options } = e.target;
    	console.log('options', options)
    	// 注意，这里返回的 options 是一个对象，并非数组
			const area2 = Object.keys(options)
			.filter(i => options[i].selected === true)
			.map(i => options[i].value);
			this.setState({
				area2,
			});
    }
    render() {
        const { area1, area2 } = this.state;
        return (
        	<div>
					单选：
					<select value={area1} onChange={this.handleChange1}>
						<option value="beijing">北京</option>
						<option value="shanghai">上海</option>
						<option value="hangzhou">杭州</option>
					</select>
					多选：
					<select multiple={true} value={area2} onChange={this.handleChange2}>
						<option value="beijing">北京</option>
						<option value="shanghai">上海</option>
						<option value="hangzhou">杭州</option>
					</select>
					</div>
    );
	}
}
export default Select
