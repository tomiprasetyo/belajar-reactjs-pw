import React from 'react'
import './YoutubeComponent.css'
import fotoku from './../../assets/fotoku.jpg';

const YouTubeComponent = (props) => {
    return (
        <div className='youtube-wrapper'>
            <div className='img-thumb'>
                <img src= {fotoku} alt='fotoku' />
                <p className='time'>{props.time}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    )
}

YouTubeComponent.defaultProps = {
    time: '00:00',
    title: 'Ini adalah Default Title',
    desc: 'Ini adalah Default Description'
}

export default YouTubeComponent;