const React = require('react');

export default class PracticeComponent extends React.Component {
    render() {
        return (
            <div id="practice" className="col s12">
                <br/><br/>
                <div className="row">
                    <form method="POST" action="/runScript" className="learn">
                        <br/><br/><br/><br/>
                        <div>You will need a webcam feed in order for the computer to</div>
                        <div>recognize your gestures so that you can begin learning ASL.</div>
                        <br/>
                        <div>Please click the button below to open the webcam feed.</div>
                        <br/>
                        <div>It is recommended that you resize the feed</div>
                        <div>window to fit within the contours of this box.</div>
                        <br/>
                        <div>It is also recommended that your hand take up as much</div>
                        <div>of the white outlined box in the webcam feed as possible.</div>
                        <br/><br/>
                        <button className="btn waves-effect waves-light indigo" type="submit" name="submit">Practice
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
                <div className="row">
                </div>
            </div>
        );
    };
}