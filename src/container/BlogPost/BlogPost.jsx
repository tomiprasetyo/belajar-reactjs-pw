import React, { Component, Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css'
import axios from 'axios'
class BlogPost extends Component {
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3001/posts')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3001/posts/${data}`)
        .then((res) => {
            this.getPostAPI()
            console.log(res)
        })
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        this.getPostAPI()
    }

    render() {
        return (
            <Fragment>
                <p className='section-title'>BlogPost</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;
