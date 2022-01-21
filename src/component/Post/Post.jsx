import React from 'react';

const Post = (props) => {
    return (
        <div className='post'>
            <div className='img-thumb'>
                <img src="https://placeimg.com/200/150/tech" alt="dummyImage" />
            </div>
            <div className='content'>
                <p className='title'>Title</p>
                <p className='desc'>Body</p>
            </div>
        </div>
    )
}

export default Post;
