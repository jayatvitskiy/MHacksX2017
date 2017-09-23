import React from 'react';
import $ from 'jquery';
import {HOME, LEARN, PRACTICE, TRANSLATE} from "../constants/constants";

export default class TabContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const ths = this;
        $('#home-button').click(function (event) {
            ths.props.contentChange(HOME);
        });
        $('#learn-button').click(function (event) {
            ths.props.contentChange(LEARN);
        });
        $('#practice-button').click(function (event) {
            ths.props.contentChange(PRACTICE);
        });
        $('#translate-button').click(function (event) {
            ths.props.contentChange(TRANSLATE);
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 pink accent-3 navbar">
                        <ul className="tabs">
                            <li className="tab col s3"><a className="active" id="home-button" href="#home">HOME</a></li>
                            <li className="tab col s3"><a id="learn-button" href="#learn">LEARN</a></li>
                            <li className="tab col s3"><a id="practice-button" href="#practice">PRACTICE</a></li>
                            <li className="tab col s3"><a id="translate-button" href="#translate">TRANSLATE</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}