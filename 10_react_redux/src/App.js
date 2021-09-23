import React, { PureComponent } from 'react'
import Home from './pages/home4_react_thunk的使用';
import About from './pages/about4';

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
