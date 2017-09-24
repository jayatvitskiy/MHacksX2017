import React from 'react';

export default class LearnCameraComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <div className="row">
                    <div className="col s6" id="image">
                        <img src={"pngs edited/" + this.props.imgID + ".png"} width="450px" height="450px"/>
                    </div>
                    <div className="col s6">
                        <div className="chip pink accent-3 white-text chipLearn">get
                            ready in
                        </div>
                        <div className="chip chip1 chipLearn" id="chip1">
                            one
                        </div>
                        <div className="chip chip2 chipLearn" id="chip2">
                            two
                        </div>
                        <div className="chip chip3 chipLearn" id="chip3">
                            three
                        </div>
                        <div className="chip chip4 chipLearn" id="chip4">
                            four
                        </div>
                        <div className="chip chip5 chipLearn" id="chip5">
                            five
                        </div>
                        <div className="camera">
                            <div id="response1"/>
                            <div className="mybox2" id="box"/>
                            <video id="forVid1" loop autoPlay height="400px" width="600px"/>
                        </div>
                        <canvas ref="canvas1" id="canvas1" width={600} height={400}/>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        );
    };
}