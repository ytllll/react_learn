import React, { PureComponent } from 'react'
import Home from './pages/home3_react-redux-connect';
import About from './pages/about3';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <hr/>
        <About/>
      </div>
    )
  }
}
