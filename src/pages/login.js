import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '登录页面'
        }
    }
    render () {
        return (
            <div>{this.state.name}</div>
        )
    }
}