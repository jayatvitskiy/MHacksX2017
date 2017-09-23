import React from 'react';

import LearnButtonsComponent from "../components/LearnButtonsComponent";
import LearnCameraComponent from "../components/LearnCameraComponent";

export default class LearnContainer extends React.Component {

    componentDidMount() {
        $('.learning-button').click(function (event) {
            $('#image').innerHTML = "<img src='pngs edited/" + event.target.id + ".PNG' width='450px' height='450px'>";
        });
    }

    render() {
        return (
            <div id="learn" className="col s12">
                <LearnButtonsComponent/>
                <LearnCameraComponent/>
            </div>
        );
    };
}
