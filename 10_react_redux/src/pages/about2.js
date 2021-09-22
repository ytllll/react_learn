import React, { PureComponent } from 'react'
import { connect } from '../utils/connect'
import { decAction, subAction } from '../store/actionCreators'

class About extends PureComponent {
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={e => this.props.decrement()}>-1</button>
        <button onClick={e => this.props.subNumber(5)}>-5</button>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};
const mapdispatchToProps = dispatch => {
  return {
    decrement: function() {
      dispatch(decAction())
    },
    subNumber: function(num) {
      dispatch(subAction(num))
    }
  }
};

export default connect(mapStateToProps, mapdispatchToProps)(About);
