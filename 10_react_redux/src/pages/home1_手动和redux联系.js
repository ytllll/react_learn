import React, { PureComponent } from 'react'
import store from '../store';
import { addAction, incAction } from '../store/actionCreators';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    // 订阅store
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    // 取消订阅
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={ e => this.increament() }>+1</button>
        <button onClick={ e => this.addNumber(5) }>+5</button>
      </div>
    )
  }

  increament() {
    store.dispatch(incAction())
  }

  addNumber(num) {
    store.dispatch(addAction(num))
  }
}
