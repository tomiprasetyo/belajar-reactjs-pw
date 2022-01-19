import React, { Component } from 'react'
import './LifeCycleComponent.css'

class LifeCycleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null;
    }


    componentDidMount() {
        console.log('constructor')
        setTimeout(() => {
            this.setState({
                count: 2
            })
        }, 3000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return (
            <button className='btn'>Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComponent