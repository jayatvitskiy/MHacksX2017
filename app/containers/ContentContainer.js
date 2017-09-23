import HomeComponent from "../components/HomeComponent";

const React = require('react');

import TitleComponent from '../components/TitleComponent.js';
import TabComponent from '../components/TabComponent.js';
import LearnComponent from "../components/LearnComponent";
import PracticeComponent from "../components/PracticeComponent";
import TranslateComponent from "../components/TranslateComponent";

export default class TitleContainer extends React.Component {
    render() {
        return (
            <div>
                <HomeComponent/>
                <LearnComponent/>
                <PracticeComponent/>
                <TranslateComponent/>
            </div>
        );
    };
}
