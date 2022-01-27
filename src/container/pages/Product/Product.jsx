import React, { Component, Fragment } from 'react'
import './Product.css'
import logo from '../../../assets/logo.png';
import trolley from '../../../assets/trolley.jpg';
import CardProduct from './CardProduct/CardProduct';
// import { connect } from 'react-redux';
import {RootContext} from '../../Home/Home'




class Product extends Component {
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <Fragment>
                                <p>Halaman Product</p>
                                <hr />
                                <div className='header'>
                                    <div className='logo'>
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <div className="trolley">
                                        <img src={trolley} alt="trolley" />
                                        <div className="count">{value.state.totalOrder}</div>
                                    </div>
                                </div>
                                <CardProduct />
                            </Fragment>
                        )
                    }
                }
                
            </RootContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);

export default Product;