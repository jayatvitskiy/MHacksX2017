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
        $('#translate').onclick(function() {
            const translateimg = document.getElementById('translateimg');
            const translatebox = document.getElementById('translatebox');
            translateimg.innerHTML = "";
            let chars = translatebox.value.toUpperCase().replace(/\s+/g, '');
            if (chars.match(/^[a-zA-Z0-9]+$/i)) {
                for (let i = 0, len = chars.length; i < len; i++) {
                    translateimg.innerHTML += "<img src='pngs edited/" + chars.charAt(i) + ".PNG' width='300px' height='300px'>";
                }
                $(translatebox).val('');
            } else if (chars === "") {
                Materialize.toast('Please enter a message.', 2000);
            } else {
                Materialize.toast('Please enter only alphanumeric characters.', 3000);
            }
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