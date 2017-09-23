const React = require('react');

import TabContainer from './TabContainer';
import ContentContainer from './ContentContainer';
import FooterComponent from '../components/FooterComponent';

export default class MainContainer extends React.Component {
    render() {
        return (
            <div>
                <TabContainer/>
                <ContentContainer/>
                <FooterComponent/>
            </div>
        );
    }
}