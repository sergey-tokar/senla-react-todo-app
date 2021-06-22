import React from 'react';
import TabSelector from "./TabSelector";

export default class TabsNavigation extends React.Component {
    render() {
        return (
            <div className="tabs-navigation">
                <TabSelector value = 'All' className = 'button tab-selector tab-selector-all active-tab'/>
                <TabSelector value = 'Active' className = 'button tab-selector tab-selector-active'/>
                <TabSelector value = 'Done' className = 'button tab-selector tab-selector-done'/>
            </div>
        );
    }
}
