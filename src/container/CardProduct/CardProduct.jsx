import React, { Component } from 'react'
import dagingAyam from './../../assets/daging-ayam.jpg';

class CardProduct extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })

    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    render() {
        return (
        <div className='card'>
            <div className='img-thumb-product'>
                <img src={dagingAyam} alt="daging-ayam" />
            </div>
            <p className='product-title'>Daging Ayam Segar Utuh </p>
            <p className='product-price'>Rp 40.000</p>
            <div className='counter'>
                <button className='minus' onClick={this.handleMinus}> - </button>
                <input type="text" value={this.state.order} onChange={this.handleCounterChange} />
                <button className='plus' onClick={this.handlePlus}> + </button>
            </div>
        </div>
        )
    }
}

export default CardProduct;