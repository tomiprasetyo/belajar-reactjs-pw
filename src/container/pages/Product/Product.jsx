import React, { Component, Fragment } from 'react'
import './Product.css'
import logo from '../../../assets/logo.png';
import trolley from '../../../assets/trolley.jpg';
import CardProduct from './CardProduct/CardProduct';
import { connect } from 'react-redux';




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
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className='header'>
                    <div className='logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="trolley">
                        <img src={trolley} alt="trolley" />
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);