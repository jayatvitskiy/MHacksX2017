import React from 'react';
import Webcam from 'react-webcam';

import PracticeReadyComponent from '../components/PracticeReadyComponent';
import PracticeCameraComponent from '../components/PracticeCameraComponent';

let intervalID = 0;

export default class PracticeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.startCount = this.startCount.bind(this);
        this.submitImage = this.submitImage.bind(this);
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
        let letterDiv = null;
        this.refs.practicebtn.disabled = true;

        responseDiv3 = this.refs.response2;
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

        responseDiv = this.refs.response2;
        letterDiv = this.refs.letterdiv;

        letterDiv.innerHTML = ('Please make the character ' + rand + '.');
        timer1 = setTimeout(function () {
            $('#chip6').addClass('indigo white-text');
        }, 1000);
        timer2 = setTimeout(function () {
            $('#chip7').addClass('indigo white-text');
        }, 2000);
        timer3 = setTimeout(function () {
            $('#chip8').addClass('indigo white-text');
        }, 3000);
        timer4 = setTimeout(function () {
            $('#chip9').addClass('indigo white-text');
        }, 4000);
        timer5 = setTimeout(function () {
            $('#chip10').addClass('indigo white-text');
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

    enablePractice()
    {
        this.refs.practicebtn.disabled = false;
    }

    startCount() {
        let alphaNumericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 'A', 'B', 'C', 'D', 'E', 'F', 'G',
            "H", 'I', "J", 'K', "L", "M", "N", "O", 'P', "Q", 'R', 'S', 'T', 'U', 'V', 'W', "X", 'Y', 'Z'];
        let rand = alphaNumericArray[Math.floor(Math.random() * alphaNumericArray.length)];
        let responseDiv3 = document.getElementById("response2");
        console.log(this);
        if (this.submitImage('Practice'))
        {
            alphaNumericArray.splice(alphaNumericArray.indexOf(rand), 1); //if user made correct sign, remove rand from array
            rand = alphaNumericArray[Math.floor(Math.random() * alphaNumericArray.length)]; //generate new rand
        }

        intervalID = setInterval(function() {
            if ((responseDiv3.innerHTML) === "Correct.")
            {
                alphaNumericArray.splice(alphaNumericArray.indexOf(rand), 1);
                rand = alphaNumericArray[Math.floor(Math.random() * alphaNumericArray.length)];
            }

            if (alphaNumericArray !== null && alphaNumericArray.length >= 1) {
                this.submitImage('Practice');
            } else {
                this.stopCount();
            }
        }, 8000);
    }

    stopCount() {
        clearInterval(intervalID);
    }

    restartPage() {
        this.enablePractice();
        this.stopCount();
    }

    render() {
        return (
            <div id="practice" className="col s12">
                <PracticeReadyComponent/>
                <div className="row">
                    <div ref="letterdiv" id="letterdiv"/>
                    <div ref="response2" id="response2"/>
                    <div className="mybox"/>
                    <Webcam
                        audio={false}
                        height={400}
                        ref="webcam"
                        screenshotFormat="image/jpeg"
                        width={600}
                    />
                </div>
                <div className="row">
                    <div className="col s3 push-s4">
                        <button className="btn waves-effect waves-light indigo practice-btn" ref="practicebtn" id="practicebtn"
                                onClick={()=>{this.startCount()}}>Start
                        </button>
                    </div>
                    <div className="col s3 push-s2">
                        <button className="btn waves-effect waves-light pink accent-3 practice-btn" id="endpracticebtn"
                                onClick={()=>{this.restartPage()}}>End
                        </button>
                    </div>
                </div>
            </div>
        );
    };
}