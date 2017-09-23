const React = require('react');

export default class LearnCameraComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s6" id="image">
                    <img src="../pngs%20edited/A.PNG" width="450px" height="450px"/>
                </div>
                <div className="col s6">
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
                        <br/>
                        <button className="btn waves-effect waves-light indigo" type="submit" name="submit">Learn
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>
        );
    };
}