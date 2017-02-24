/**
 * Created by super on 16/12/14.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink ,hashHistory} from 'react-router'
import { createHistory, useBasename } from 'history'
import {My} from './view/index.js'
import App from './app.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {todos} from './redux/reducer/reducers'
let store = createStore(todos);

render((
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/my" component={My}/>
        </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
