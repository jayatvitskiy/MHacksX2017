import React from 'react';

import TranslateWriteComponent from '../components/TranslateWriteComponent';
import TranslateImageComponent from '../components/TranslateImageComponent';

export default class TranslateContainer extends React.Component {
    componentDidMount() {
        $('#clear-message').click(function (event) {
            $('#translatebox').val('');
            $('#translateimage').innerHTML = "";
            Materialize.toast('Message cleared.', 2000);
        });
    }

    render() {
        return (
            <div id="translate" className="col s12">
                <TranslateWriteComponent/>
                <TranslateImageComponent/>
            </div>
        );
    };
}