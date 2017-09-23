import React from 'react';

import {HOME, LEARN, PRACTICE} from "../constants/constants"

import LearnContainer from "./LearnContainer";
import TranslateContainer from "./TranslateContainer";

import HomeComponent from "../components/HomeComponent";
import PracticeComponent from "../components/PracticeComponent";

export default class ContentContainer extends React.Component {

    componentDidMount() {
        $('.slider').slider({full_width: true});
    }

    componentDidUpdate(prevProps, prevState) {
        $('.slider').slider({full_width: true});
    }

    render() {
        return (
            <div>
                {this.props.currentState === HOME ? <HomeComponent/> : this.props.currentState === LEARN ? <LearnContainer/> :
                    this.props.currentState === PRACTICE ? <PracticeComponent/> : <TranslateContainer/>}
            </div>
        );
    };
}
