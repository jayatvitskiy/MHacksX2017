import React from 'react';

import TranslateWriteComponent from '../components/TranslateWriteComponent';
import TranslateImageComponent from '../components/TranslateImageComponent';

export default class TranslateContainer extends React.Component {
    render() {
        return (
            <div id="translate" className="col s12">
                <TranslateWriteComponent/>
                <TranslateImageComponent/>
            </div>
        );
    };
}