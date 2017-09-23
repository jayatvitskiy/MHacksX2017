import React from 'react';

import TitleComponent from '../components/TitleComponent.js';
import TabComponent from '../components/TabComponent.js';

export default class TitleContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TitleComponent/>
                <TabComponent contentChange = {this.props.contentChange} />
            </div>
        );
    };
}
