// libraries
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//pages
import Product from './../pages/Product/Product'
import LifeCycleComponent from '../pages/LifeCycleComponent/LifeCycleComponent'
import BlogPost from '../pages/BlogPost/BlogPost'
import YouTubeComponentPage from '../pages/YouTubeComponentPage/YoutubeComponentPage'
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost'

//style
import './Home.css'

class Home extends Component {

    state = {
        showComponent: true
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className='navigation'>
                        <Link to='/' >Blog Post</Link>
                        <Link to='/product' >Product</Link>
                        <Link to='/lifecycle' >LifeCycle</Link>
                        <Link to='/youtube-component'>Youtube</Link>
                    </div>

                        <Route path='/' exact component={BlogPost} />
                        <Route path='/detail-post/:postID' component={DetailPost} />
                        <Route path='/product' component={Product} />
                        <Route path='/lifecycle' component={LifeCycleComponent} />
                        <Route path='/youtube-component' component={YouTubeComponentPage} />
                </Fragment>
            </Router>
        )
    }
}

export default Home