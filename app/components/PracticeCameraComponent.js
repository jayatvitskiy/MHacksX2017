import React from 'react';

export default class PracticeCameraComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div id="letterdiv"/>
                    <div id="response2"/>
                    <div className="mybox"/>
                    <div className="camera">
                        <video className="forVid2" loop autoPlay height="400px" width="600px"/>
                    </div>
                    <canvas id="canvas"/>
                </div>
                <div className="row">
                    <div className="col s3 push-s4">
                        <button className="btn waves-effect waves-light indigo practice-btn" id="practicebtn"
                                onClick={()=>{this.props.startCount()}}>Start
                        </button>
                    </div>
                    <div className="col s3 push-s2">
                        <button className="btn waves-effect waves-light pink accent-3 practice-btn" id="endpracticebtn"
                                onClick="">End
                        </button>
                    </div>
                </div>
            </div>
        );
    };
}