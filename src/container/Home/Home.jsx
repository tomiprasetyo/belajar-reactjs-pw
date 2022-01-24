import React, { Component } from 'react'
import Product from './../Product/Product'
import LifeCycleComponent from './../LifeCycleComponent/LifeCycleComponent'
import BlogPost from '../BlogPost/BlogPost'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {

    state = {
        showComponent: true
    }

    render() {
        return (
            <BrowserRouter>
                <>
                    <div className='navigation'>
                        <Link to='/' >Blog Post</Link>
                        <Link to='/product' >Product</Link>
                        <Link to='/lifecycle' >LifeCycle</Link>
                    </div>
                    <Routes>
                        <Route path='/' element={<BlogPost />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/lifecycle' element={<LifeCycleComponent />} />
                    </Routes>
                </>
            </BrowserRouter>
        )
    }
}

export default Home