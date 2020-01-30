import React, { Component } from 'react';
import './login.less';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '登录页面'
        }
    }
    render () {
        return (
            <div className="title">
                {this.state.name}
                <span className="title-name">liuchang</span>
                <div className="title-img"></div>
            </div>
        )
    }
}