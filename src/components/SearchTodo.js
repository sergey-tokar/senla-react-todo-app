import React from 'react';
import searchIcon from "../images/icons/search-icon.svg";

export default class SearchTodo extends React.Component {


    render() {
        return (
            <div className="search-wrapper">
                <img className="search-icon" src={searchIcon} alt="search icon"/>
                <input onChange={(event) => this.props.onChange(event.target.value)} className="search" type="search" placeholder="Search task for to do"/>
            </div>
        );
    }
}
