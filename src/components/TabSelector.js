import React from 'react';

export default class TabSelector extends React.Component {

    render() {
        return (
            <button onClick={() => this.props.onClick()} className={`button tab-selector tab-selector-all ${this.props.isActive ? 'active-tab' : ''}`}>{this.props.title}</button>
        );
    }
}
