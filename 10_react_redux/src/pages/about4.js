import React from 'react'
// import { connect } from '../utils/connect'
import { connect, useSelector, shallowEqual } from 'react-redux';
import { decAction, subAction } from '../store/actionCreators'

function About(props) {
  const { banners, recommends, counter } = useSelector(state => ({
    banners: state.banners,
    recommends: state.recommends,
    counter: state.counter
  }), shallowEqual);
  return (
    <div>
      <h1>About</h1>
      <h2>当前计数: {counter}</h2>
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subNumber(5)}>-5</button>
      <h1>Banner</h1>
      <ul>
        {
          banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <h1>Recommend</h1>
      <ul>
        {
          recommends.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
    </div>
  )
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
// export default About;
