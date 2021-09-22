import React, { PureComponent } from 'react'
import Home from './pages/home2';
import About from './pages/about2';

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
