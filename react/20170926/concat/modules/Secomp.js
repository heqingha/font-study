import React, { Component, PropTypes } from 'react';
class ListItem extends Component {
    static contextTypes = {
        color: PropTypes.string,
    };
    render() {
        const { value } = this.props;
        return (
        	<li style = { { background: this.context.color } }>
            <span> { value } </span>
          </li>
        );
    }
}
class List extends Component {
    /*而是在父组件中定义了 ChildContext，这样从这一层开始的子组件都可以拿到定义的 context，例如这里的 color。*/
    static childContextTypes = {
        color: PropTypes.string,
    };
    getChildContext() {
        return {
            color: 'red',
        };
    }
    render() {
        const { list } = this.props;
        return (
        	<div>
            <ul>
            {
              list.map((entry, index) => (
              <ListItem key = { `list-${index}` } value = { entry.text } />
              ))
            }
            </ul>
            </div>
        );
    }
}

class Secomp extends Component {
	constructor(props) {
		super(props);
		this.handleItemChange = this.handleItemChange.bind(this);
	}
	handleItemChange(item) {
		console.log(item);
	}
	render() {
		return (
			<List
			list={[{text: 1}, {text: 2}]}
			handleItemChange={this.handleItemChange} />
		);
	}
}
export default Secomp
