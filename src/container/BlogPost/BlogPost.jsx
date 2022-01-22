import React, { Component, Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css'
import axios from 'axios'
class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
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

    handleFormChange = (event) => {
        // console.log('handleformchange', event.target)
        let formBlogPostNew = {...this.state.formBlogPost}
        console.log(event.target.name)
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            console.log('value obj formBlogPost', this.state.formBlogPost)
        })
    }

    componentDidMount() {
        this.getPostAPI()
    }

    render() {
        return (
            <Fragment>
                <p className='section-title'>BlogPost</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' placeholder='add title' onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder='add blog content' onChange={this.handleFormChange}></textarea>
                    <button className='btn-submit'>Simpan</button>
                </div>
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
