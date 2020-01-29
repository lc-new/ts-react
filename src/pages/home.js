import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '主页面'
        }
    }
    render () {
        return (
            <div>{this.state.name}</div>
        )
    }
}