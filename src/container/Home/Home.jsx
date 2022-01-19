import React, { Component } from 'react'
import Product from '../Product/Product'

class Home extends Component {
    render() {
        return (
            <div>
                {/* <p>YouTube Component</p>
                <hr />
                <YouTubeComponent time='10.02' title='Belajar' desc='Deskripsi' />
                <YouTubeComponent time='04.24' title='Props' desc='Sederhana' />
                <YouTubeComponent time='13.42' title='Dinamis' desc='Dari' />
                <YouTubeComponent time='09.12' title='ReactJS' desc='Komponen Dinamis' />
                <YouTubeComponent /> */}

                <p>Counter</p>
                <hr />
                <Product />
            </div>
        )
    }
}

export default Home