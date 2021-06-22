import React from 'react';
import TabSelector from "./TabSelector";

export default class TabsNavigation extends React.Component {

    render() {
        return (
            <div className="tabs-navigation">
                <TabSelector onClick={() => this.props.onChange(null)} title='All' isActive={this.props.filter === null}/>
                <TabSelector onClick={() => this.props.onChange(false)} title='Active' isActive={this.props.filter === false}/>
                <TabSelector onClick={() => this.props.onChange(true)} title='Done' isActive={this.props.filter === true}/>
            </div>
        );
    }
}
