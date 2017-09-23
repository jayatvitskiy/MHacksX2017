const React = require('react');

export default class TranslateComponent extends React.Component {
    render() {
        return (
            <div id="translate" className="col s12">
                <br/><br/>
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
                <div className="row">
                    <div className="col s3 push-s3">
                        <button className="btn waves-effect waves-light indigo" id="translate">Translate
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                    <div className="col s3 push-s3">
                        <a className="waves-effect waves-indigo btn-flat">Clear Message</a>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div id="translateimg">
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        );
    };
}