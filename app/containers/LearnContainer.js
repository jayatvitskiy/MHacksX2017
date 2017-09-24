import React from 'react';
import Webcam from 'react-webcam';

import LearnButtonsComponent from "../components/LearnButtonsComponent";

let disabled = false;

export default class LearnContainer extends React.Component {
    constructor(props) {
        super(props);
        this.submitDisable = this.submitDisable.bind(this);
        this.submitImage = this.submitImage.bind(this);
        this.state = {imgID: 'A'};
    }

    submitImage(letter) {
        let rand = 'a';
        let timer1 = null;
        let timer2 = null;
        let timer3 = null;
        let timer4 = null;
        let timer5 = null;
        let responseDiv3 = null;
        let responseDiv = null;

        if (disabled === false) {
            responseDiv3 = document.getElementById("response2");
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
            $('.chip1').removeClass('indigo white-text');
            $('.chip2').removeClass('indigo white-text');
            $('.chip3').removeClass('indigo white-text');
            $('.chip4').removeClass('indigo white-text');
            $('.chip5').removeClass('indigo white-text');

            function readBody(xhr) {
                let data;
                if (!xhr.responseType || xhr.responseType === "text") {
                    data = xhr.responseText;
                } else if (xhr.responseType === "document") {
                    data = xhr.responseXML;
                } else {
                    data = xhr.response;
                }
                return data;
            }

            responseDiv = this.refs.response1;
                timer1 = setTimeout(function () {
                    $('#chip1').addClass('indigo white-text');
                }, 1000);
                timer2 = setTimeout(function () {
                    $('#chip2').addClass('indigo white-text');
                }, 2000);
                timer3 = setTimeout(function () {
                    $('#chip3').addClass('indigo white-text');
                }, 3000);
                timer4 = setTimeout(function () {
                    $('#chip4').addClass('indigo white-text');
                }, 4000);
                timer5 = setTimeout(function () {
                    $('#chip5').addClass('indigo white-text');
                }, 5000);


            let ths = this;
            setTimeout(function () {
                let data = ths.refs.webcam.getScreenshot();
                let ajax = new XMLHttpRequest();
                ajax.open("POST", 'https://ensign.hthswd.org:8085/process_file', false);
                ajax.setRequestHeader('Content-Type', 'application/upload');
                if (letter === "Practice") {
                    ajax.send(rand + "imgData=" + data);
                } else {
                    ajax.send(letter + "imgData=" + data);
                }
                responseDiv.innerHTML = readBody(ajax);
                return ((responseDiv3.innerHTML) === "Correct.");
            }, 6000);
        }
    }

    disableAll() {
        disabled = true;
        setTimeout(function () {
            disabled = false
        }, 6000);
    }

    submitDisable(letter) {
        if (disabled === false) {
            this.submitImage(letter);
            this.setState({imgID: letter});
            this.disableAll();
        }
    }

    componentDidMount() {
        $('.learning-button').click(function (event) {
            $('#image').innerHTML = "<img src='pngs edited/" + event.target.id + ".PNG' width='450px' height='450px'/>";
        });
    }

    render() {
        return (
            <div id="learn" className="col s12">
                <form method="POST" onSubmit={this.submitImage}>
                    <LearnButtonsComponent submitDisable={this.submitDisable.bind(this)}/>
                    <br/>
                    <div className="row">
                        <div className="col s6" id="image">
                            <img src={"pngs edited/" + this.state.imgID + ".png"} width="450px" height="450px"/>
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
                                    <Webcam
                                        audio={false}
                                        height={200}
                                        ref="webcam"
                                        screenshotFormat="image/jpeg"
                                        width={200}
                                    />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
}
