import React from 'react';
import logo from "../images/logo.png";

export default class Logo extends React.Component {
    render() {
        return (
            <img className="logo" src={logo} alt="SENLA logotype"/>
        );
    }
}
