import React, { Component } from 'react'
import dagingAyam from '../../../../assets/daging-ayam.jpg';
import Counter from './Counter';

class CardProduct extends Component {
    render() {
        return (
        <div className='card'>
            <div className='img-thumb-product'>
                <img src={dagingAyam} alt="daging-ayam" />
            </div>
            <p className='product-title'>Daging Ayam Segar Utuh </p>
            <p className='product-price'>Rp 40.000</p>
            <Counter />
        </div>
        )
    }
}

export default CardProduct;