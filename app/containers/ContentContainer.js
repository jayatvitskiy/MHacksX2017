const React = require('react');

import LearnContainer from "./LearnContainer";
import TranslateContainer from "./TranslateContainer";

import HomeComponent from "../components/HomeComponent";
import PracticeComponent from "../components/PracticeComponent";

export default class TitleContainer extends React.Component {
    render() {
        return (
            <div>
                <HomeComponent/>
                <LearnContainer/>
                <PracticeComponent/>
                <TranslateContainer/>
            </div>
        );
    };
}
