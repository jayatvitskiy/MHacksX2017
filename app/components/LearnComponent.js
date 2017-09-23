const React = require('react');

export default class LearnComponent extends React.Component {
    render() {
        return (
            <div id="learn" className="col s12">
                <div className="row">
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="A" href = "/learnScript/A">A</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="B" href = "/learnScript/B">B</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="C" href = "/learnScript/C">C</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="D" href = "/learnScript/D">D</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="E" href = "/learnScript/E">E</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="F" href = "/learnScript/F">F</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="G" href = "/learnScript/G">G</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="H" href = "/learnScript/H">H</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="I" href = "/learnScript/I">I</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="J" href = "/learnScript/J">J</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="K" href = "/learnScript/K">K</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="L" href = "/learnScript/L">L</a></div>
                </div>
                <div className="row">
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="M" href = "/learnScript/M">M</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="N" href = "/learnScript/N">N</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="O" href = "/learnScript/O">O</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="P" href = "/learnScript/P">P</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="Q" href = "/learnScript/Q">Q</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="R" href = "/learnScript/R">R</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="S" href = "/learnScript/S">S</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="T" href = "/learnScript/T">T</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="U" href = "/learnScript/U">U</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="V" href = "/learnScript/V">V</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="W" href = "/learnScript/W">W</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="X" href = "/learnScript/X">X</a></div>
                </div>
                <div className="row">
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="Y" href = "/learnScript/Y">Y</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn pink accent-3" id="Z" href = "/learnScript/Z">Z</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn indigo" id="0" href = "/learnScript/0">0</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn indigo" id="1" href = "/learnScript/1">1</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn indigo" id="2" href = "/learnScript/2">2</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn indigo" id="3" href = "/learnScript/3">3</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn indigo" id="4" href = "/learnScript/4">4</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn indigo" id="5" href = "/learnScript/5">5</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn indigo" id="6" href = "/learnScript/6">6</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn indigo" id="7" href = "/learnScript/7">7</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn indigo" id="8" href = "/learnScript/8">8</a></div>
                    <div className="col s1"><a className="waves-effect waves-light btn indigo" id="9" href = "/learnScript/9">9</a></div>

                </div>
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
                            <button className="btn waves-effect waves-light indigo" type="submit" name="submit">Learn
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}