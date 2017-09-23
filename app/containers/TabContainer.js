const React = require('react');

import TitleComponent from '../components/TitleComponent.js';
import TabComponent from '../components/TabComponent.js';

export default class TitleContainer extends React.Component {
    render() {
        return (
            <div>
                <TitleComponent/>
                <TabComponent/>
            </div>
        );
    };
}
