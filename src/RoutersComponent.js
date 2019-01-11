import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import CryptoDescription from './components/CryptoDescription';
export default class RoutersComponent extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact={true} path="/" component={App}/>     
        <Route  path="/record/:cryptoid" component={CryptoDescription}/>     
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
