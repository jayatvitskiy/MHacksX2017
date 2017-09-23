import React from 'react';

import PracticeReadyComponent from '../components/PracticeReadyComponent';
import PracticeCameraComponent from '../components/PracticeCameraComponent';

export default class PracticeContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div id="practice" className="col s12">
                <PracticeReadyComponent/>
                <PracticeCameraComponent/>
            </div>
        );
    };
}