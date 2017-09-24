import React from 'react';

import PracticeReadyComponent from '../components/PracticeReadyComponent';
import PracticeCameraComponent from '../components/PracticeCameraComponent';

export default class PracticeContainer extends React.Component {

    loading(querySelector)
    {
        let video = document.querySelector(querySelector);
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

    enablePractice()
    {
        document.getElementById('practicebtn').disabled = false;
    }

    startCount() {
        let alphaNumericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 'A', 'B', 'C', 'D', 'E', 'F', 'G',
            "H", 'I', "J", 'K', "L", "M", "N", "O", 'P', "Q", 'R', 'S', 'T', 'U', 'V', 'W', "X", 'Y', 'Z'];
        let rand = alphaNumericArray[Math.floor(Math.random() * alphaNumericArray.length)];
        let responseDiv3 = document.getElementById("response2");

        if (this.props.submitImage('Practice'))
        {
            alphaNumericArray.splice(alphaNumericArray.indexOf(rand), 1); //if user made correct sign, remove rand from array
            rand = alphaNumericArray[Math.floor(Math.random() * alphaNumericArray.length)]; //generate new rand
        }

        IntervalID = setInterval(function() {
            if ((responseDiv3.innerHTML) === "Correct.")
            {
                alphaNumericArray.splice(alphaNumericArray.indexOf(rand), 1);
                rand = alphaNumericArray[Math.floor(Math.random() * alphaNumericArray.length)];
            }

            if (alphaNumericArray !== null && alphaNumericArray.length >= 1) {
                this.props.submitImage('Practice');
            } else {
                this.stopCount();
            }
        }, 8000);
    }

    stopCount() {
        clearInterval(IntervalID);
    }


    componentDidMount() {
        this.loading($('#forVid2'));
    }

    render() {
        return (
            <div id="practice" className="col s12">
                <PracticeReadyComponent/>
                <PracticeCameraComponent/>
            </div>
        );
    };
}