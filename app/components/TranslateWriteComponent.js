import React from 'react';

export default class TranslateComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6 push-s3">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea id="translatebox" className="materialize-textarea"/>
                                <label form="translatebox">Message</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}