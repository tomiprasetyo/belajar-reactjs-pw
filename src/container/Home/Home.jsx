import React, { Component } from 'react'
import Product from './../pages/Product/Product'
import LifeCycleComponent from '../pages/LifeCycleComponent/LifeCycleComponent'
import BlogPost from '../pages/BlogPost/BlogPost'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './Home.css'
import YouTubeComponentPage from '../pages/YouTubeComponentPage/YoutubeComponentPage'

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
                        <Link to='/youtube-component'>Youtube</Link>
                    </div>
                    <Routes>
                        <Route path='/' element={<BlogPost />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/lifecycle' element={<LifeCycleComponent />} />
                        <Route path='/youtube-component' element={<YouTubeComponentPage />} />
                    </Routes>
                </>
            </BrowserRouter>
        )
    }
}

export default Home