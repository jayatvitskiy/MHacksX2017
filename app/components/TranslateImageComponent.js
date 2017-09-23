import React from 'react';

export default class TranslateComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s3 push-s3">
                        <button className="btn waves-effect waves-light indigo" id="translate">Translate
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                    <div className="col s3 push-s3">
                        <a id="clear-message" className="waves-effect waves-indigo btn-flat">Clear Message</a>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div id="translateimg">
                    </div>
                </div>
            </div>
        );
    };
}