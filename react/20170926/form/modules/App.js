import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React forms</h1>
        <ul role="nav">
          <li><Link to="/text">文本框</Link></li>
          <li><Link to="/radio">单选按钮</Link></li>
          <li><Link to="/check">复选框</Link></li>
          <li><Link to="/select">下拉选择</Link></li>
          <li><Link to="/comp">受控组件and非受控组件</Link></li>
        </ul>
      </div>
    )
  }
})
