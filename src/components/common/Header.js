import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component { 
    render() {
        return (
            <nav>
                <Link to="/main" activeClassName="active">Main</Link>
                {" / "}
                <Link to="/board" activeClassName="active">전략공유게시판</Link>
                {this.props.children}
            </nav>
        );
    }
}