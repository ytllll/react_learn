import React, { PureComponent } from 'react'
import store from '../store'
import { storeContext } from './context'

export function connect(mapStateToProps, mapdispatchToProps) {
  return function enHanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context);

        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <WrappedComponent {...this.props}
                                 {...mapStateToProps(this.context.getState())}
                                 {...mapdispatchToProps(this.context.dispatch)}/>
      }
    }

    EnhanceComponent.contextType = storeContext;
    return EnhanceComponent;
  }
}