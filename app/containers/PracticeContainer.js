import React from 'react';

import PracticeReadyComponent from '../components/PracticeReadyComponent';
import PracticeCameraComponent from '../components/PracticeCameraComponent';

export default class PracticeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.startCount = this.startCount.bind(this);
        this.submitImage = this.submitImage.bind(this);
    }

    loading()
    {
        let video = $('#forVid2');
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
        navigator.getUserMedia({
            video: true
        }, function() {
        }, function() {
            document.getElementById('practicebtn').style.visibility = 'hidden';
            document.getElementById('endpracticebtn').style.visibility = 'hidden';
            let chips = document.getElementsByClassName('chip');
            for (let i = 0, il = chips.length; i < il; i++) {
                chips[i].style.visibility = 'hidden';
            }
            let boxes = document.getElementsByClassName('mybox');
            for (let i = 0, il = boxes.length; i < il; i++) {
                boxes[i].style.visibility = 'hidden';
            }
            let responseDiv2 = document.getElementById('response2');
            responseDiv2.innerHTML = '<div style="color:#f50057;font-weight:bold;">IMPORTANT!</div><br>You need a webcam to use this feature.<br><br>Please plug a webcam into your<br>computer and refresh the page.';
            responseDiv2.style.color = 'black';
        });
        if (navigator.getUserMedia)
        {
            let thevid = {
                video: true,
                audio: false
            };
            navigator.getUserMedia(thevid, handleVideo, forError)
        }
        function handleVideo(localmediastream) {
            video.src = window.URL.createObjectURL(localmediastream);
        }

        function forError(e) {
        }
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

        if (letter === "Practice") {
            responseDiv = $('#response2');
            letterDiv = $('#letterdiv');
        } else {
            responseDiv = $('#response');
        }
        let canvas = $('#canvas1');
        let video = $('#forVid1');

        if (letter === "Practice") {
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
        } else {
            responseDiv.innerHTML = ('Please make the character ' + letter + '.');
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
        }

        let ths = this;

        setTimeout(function () {
            let context = ths.refs.canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = "#FFFFFF";
            context.fillRect(0, 0, canvas.width, canvas.height);

            console.log(canvas);
            console.log(canvas.width);
            console.log(canvas.height);

            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            let data = canvas.toDataURL('image/jpeg', 1);
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
        document.getElementById('practicebtn').disabled = false;
    }

    startCount() {
        let alphaNumericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 'A', 'B', 'C', 'D', 'E', 'F', 'G',
            "H", 'I', "J", 'K', "L", "M", "N", "O", 'P', "Q", 'R', 'S', 'T', 'U', 'V', 'W', "X", 'Y', 'Z'];
        let rand = alphaNumericArray[Math.floor(Math.random() * alphaNumericArray.length)];
        let responseDiv3 = document.getElementById("response2");

        if (this.submitImage('Practice'))
        {
            alphaNumericArray.splice(alphaNumericArray.indexOf(rand), 1); //if user made correct sign, remove rand from array
            rand = alphaNumericArray[Math.floor(Math.random() * alphaNumericArray.length)]; //generate new rand
        }

        let intervalID = setInterval(function() {
            if ((responseDiv3.innerHTML) === "Correct.")
            {
                alphaNumericArray.splice(alphaNumericArray.indexOf(rand), 1);
                rand = alphaNumericArray[Math.floor(Math.random() * alphaNumericArray.length)];
            }

            if (alphaNumericArray !== null && alphaNumericArray.length >= 1) {
                this.submitImage('Practice');
            } else {
                this.stopCount(intervalID);
            }
        }, 8000);
    }

    stopCount(intervalID) {
        clearInterval(intervalID);
    }


    componentDidMount() {
        this.loading();
    }

    render() {
        return (
            <div id="practice" className="col s12">
                <PracticeReadyComponent/>
                <PracticeCameraComponent startCount={this.startCount()}/>
            </div>
        );
    };
}