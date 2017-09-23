const React = require('react');

import LearnButtonsComponent from "../components/LearnButtonsComponent";
import LearnCameraComponent from "../components/LearnCameraComponent";

export default class LearnContainer extends React.Component {
    render() {
        return (
            <div id="learn" className="col s12">
                <LearnButtonsComponent/>
                <LearnCameraComponent/>
            </div>
        );
    };
}
