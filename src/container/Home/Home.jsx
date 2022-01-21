import React, { Component } from 'react'
import BlogPost from '../BlogPost/BlogPost'

class Home extends Component {

    state = {
        showComponent: true
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }

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

                {/* <p>Counter</p>
                <hr />
                <Product /> */}

                {/* <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent ? <LifeCycleComponent /> : null
                } */}
                <p>BlogPost</p>
                <hr />
                <BlogPost />
            </div>
        )
    }
}

export default Home