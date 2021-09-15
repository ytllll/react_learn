import React, { PureComponent } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TransitionGroup.css';

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      names: ['coderytl', 'lilei', 'hanmeimei']
    }
  }

  addName() {
    // const newNames = this.state.names;
    this.setState({
      // names: newNames.push("ytllll")
      names: [...this.state.names, "ytllll"]
    })
  }

  removeItem(index) {
    const newNames = [...this.state.names];
    this.setState({
      names: newNames.filter((item, indey) => {
        return index !== indey
      })
    })
  }

  render() {
    return (
      <TransitionGroup>
        {
          this.state.names.map((item, index) => {
            return (
              <CSSTransition key={item}
                             timeout={500}
                             classNames="item">
                <div>{item}<button onClick={e => this.removeItem(index)}>-</button></div>
              </CSSTransition>
            )
          })
        }
        <button onClick={e => this.addName()} >+name</button>
      </TransitionGroup>
    )
  }
}
