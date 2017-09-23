const React = require('react');

export default class PracticeComponent extends React.Component {
    render() {
        return (
            
            <div id="practice" className="col s12">
            <div className="chip chip1" id="chip6">one</div>
            <div className="chip chip2" id="chip7">two</div>
            <div className="chip chip3" id="chip8">three</div>
            <div className="chip chip4" id="chip9">four</div>
            <div className="chip chip5" id="chip10">five</div>
            
                <div className="row"> 
                            <div id = "letterdiv" ></div>
                            <div id = "response2"  ></div>
                            <div  className = "mybox" ></div>
                    <div className="camera">
                    <video id = "forVid2"  autoPlay="true" height="400px" width="600px" ></video>
                    </div>
                    <canvas id="canvas"></canvas>

                </div>
            
                <div className = "row">
                            <div className = "col s3 push-s4">
                                <button className="btn waves-effect waves-light indigo" id = "practicebtn"  onClick="startCount();this.disabled = true">Start
                                </button> 
                            </div>
                            <div className = "col s3 push-s2">
                                <button className="btn waves-effect waves-light pink accent-3" id = "endpracticebtn" onClick="stopCount();enablePractice();">End
                                </button> 
                            </div>
                        </div>
                        <div className="row">
                        </div>
            

            
            
            <div className="chip pink accent-3 white-text" >get ready in </div>
            

					

                
            </div>
        );
    };
}

