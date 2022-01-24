import React, { Component } from 'react';
import YouTubeComponent from '../../../component/YoutubeComponent/YouTubeComponent'

class YouTubeComponentPage extends Component {
    render() {
        return (
            <>
                <p>YouTube Component</p>
                <hr />
                <YouTubeComponent time='10.02' title='Belajar' desc='Deskripsi' />
                <YouTubeComponent time='04.24' title='Props' desc='Sederhana' />
                <YouTubeComponent time='13.42' title='Dinamis' desc='Dari' />
                <YouTubeComponent time='09.12' title='ReactJS' desc='Komponen Dinamis' />
                <YouTubeComponent />
            </>
        )
    }
}

export default YouTubeComponentPage;
