import React from 'react';

export default class TabSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className={this.props.className}>{this.props.value}</button>
        );
    }
}
