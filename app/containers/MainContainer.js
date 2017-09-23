import React from 'react';
import {HOME} from "../constants/constants"

import TabContainer from './TitleContainer';
import ContentContainer from './ContentContainer';
import FooterComponent from '../components/FooterComponent';

export default class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentState: HOME}
    }

    render() {
        return (
            <div>
                <TabContainer contentChange = {(newState)=>this.setState({currentState: newState})}/>
                <ContentContainer currentState = {this.state.currentState}/>
                <FooterComponent/>
            </div>
        );
    }
}