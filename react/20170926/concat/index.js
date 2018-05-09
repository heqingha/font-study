import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Comp from './modules/Comp'
import Secomp from './modules/Secomp'
import Nocomp from './modules/Nocomp'
// import CheckBox from './modules/CheckBox'
// import Select from './modules/Select'
// import Comp from './modules/Comp'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/comp" component={Comp}/>
    <Route path="/secomp" component={Secomp}/>
    <Route path="/nocomp" component={Nocomp}/>
  </Router>
), document.getElementById('app'))
