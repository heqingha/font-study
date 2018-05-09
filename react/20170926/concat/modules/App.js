import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React 组件通信</h1>
        <ul role="nav">
          <li><Link to="/comp">子向父通信</Link></li>
          <li><Link to="/secomp">跨级嵌套组件通信</Link></li>
          <li><Link to="/nocomp">跨级非嵌套组件通信</Link></li>
        </ul>
      </div>
    )
  }
})
