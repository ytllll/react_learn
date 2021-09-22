import React, { PureComponent } from 'react'
import { addAction, incAction } from '../store/actionCreators';
// import { connect } from '../utils/connect';
import { connect } from 'react-redux';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={ e => this.props.increament() }>+1</button>
        <button onClick={ e => this.props.addNumber(5) }>+5</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapdispatchToProps = dispatch => {
  return {
    increament: function() {
      dispatch(incAction())
    },
    addNumber: function(num) {
      dispatch(addAction(num))
    }
  }
}

export default connect(mapStateToProps, mapdispatchToProps)(Home);
