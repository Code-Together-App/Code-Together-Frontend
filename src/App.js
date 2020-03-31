import './App.css';
import Tickets from './Tickets';
import React, { Component } from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path = '/tickets' component = {Tickets}/>
          </Switch>
          
        </Router>
      </div>
    )
  }
}



