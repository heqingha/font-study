import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Text from './modules/Text'
import Radio from './modules/Radio'
import CheckBox from './modules/CheckBox'
import Select from './modules/Select'
import Comp from './modules/Comp'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/text" component={Text}/>
    <Route path="/radio" component={Radio}/>
    <Route path="/check" component={CheckBox}/>
    <Route path="/select" component={Select}/>
    <Route path="/comp" component={Comp}/>
  </Router>
), document.getElementById('app'))
