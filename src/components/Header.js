import React from 'react';
import Logo from "./Logo";
import SearchTodo from "./SearchTodo";

export default class Header extends React.Component {

    render() {
        return (
            <div className="header-wrapper content-wrapper">
                <Logo/>
                <SearchTodo onChange={(text) => this.props.onChange(text)}/>
            </div>
        );
    }
}
