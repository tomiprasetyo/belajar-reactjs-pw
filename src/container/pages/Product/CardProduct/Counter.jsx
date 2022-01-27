import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import ActionType from '../../../../redux/reducer/globalActionType';
import {RootContext} from '../../../Home/Home'
class Counter extends Component {
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue)
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order)
    //     })

    // }

    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order)
    //         })
    //     }
    // }

    render() {
        return (
            <RootContext.Consumer>
                {
                    value => {
                        console.log('value : ', value)
                        return (
                            <div className='counter'>
                                <button className='minus' onClick={() => value.dispatch({ type: 'MINUS_ORDER' })}> - </button>
                                <input type="text" value={value.state.totalOrder}  />
                                <button className='plus' onClick={() => value.dispatch({ type: 'PLUS_ORDER' })}> + </button>
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

//

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
