import React from 'react';

import LearnButtonsComponent from "../components/LearnButtonsComponent";
import LearnCameraComponent from "../components/LearnCameraComponent";

let disabled = false;

export default class LearnContainer extends React.Component {
    constructor(props) {
        super(props);
        this.submitDisable = this.submitDisable.bind(this);
        this.state = {imgID: 'A'};
    }

    submitImage(letter)
    {
        let rand = 'a';
        let timer1 = null;
        let timer2 = null;
        let timer3 = null;
        let timer4 = null;
        let timer5 = null;
        let responseDiv3 = null;
        let responseDiv = null;
        let letterDiv = null;

        if (disabled === false)
        {
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
            if (letter === "Practice")
            {
                responseDiv = $('#response2');
                letterDiv = $('#letterdiv');
            } else {
                responseDiv = $('#response');
            }
            let canvas = $('#canvas1');
            let video = $('#forVid1');

            let timer1 = null, timer2 = null, timer3 = null, timer4 = null, timer5 = null;

            if (letter === "Practice") {
                letterDiv.innerHTML = ('Please make the character ' + rand + '.');
                timer1 = setTimeout(function() {
                    $('#chip6').addClass('indigo white-text');
                }, 1000);
                timer2 = setTimeout(function() {
                    $('#chip7').addClass('indigo white-text');
                }, 2000);
                timer3 = setTimeout(function() {
                    $('#chip8').addClass('indigo white-text');
                }, 3000);
                timer4 = setTimeout(function() {
                    $('#chip9').addClass('indigo white-text');
                }, 4000);
                timer5 = setTimeout(function() {
                    $('#chip10').addClass('indigo white-text');
                }, 5000);
            } else {
                responseDiv.innerHTML = ('Please make the character ' + letter + '.');
                timer1 = setTimeout(function() {
                    $('#chip1').addClass('indigo white-text');
                }, 1000);
                timer2 = setTimeout(function() {
                    $('#chip2').addClass('indigo white-text');
                }, 2000);
                timer3 = setTimeout(function() {
                    $('#chip3').addClass('indigo white-text');
                }, 3000);
                timer4 = setTimeout(function() {
                    $('#chip4').addClass('indigo white-text');
                }, 4000);
                timer5 = setTimeout(function() {
                    $('#chip5').addClass('indigo white-text');
                }, 5000);
            }

            setTimeout(function() {
                let context = canvas.getContext('2d');
                context.clearRect(0, 0, canvas.width, canvas.height);

                context.fillStyle = "#FFFFFF";
                context.fillRect(0, 0, canvas.width, canvas.height);

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

    loading()
    {
        let video = $('#forVid1');
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
        navigator.getUserMedia({
            video: true
        }, function() {
        }, function() {
            let chips = $('.chip');
            for (let i = 0, il = chips.length; i < il; i++) {
                chips[i].style.visibility = 'hidden';
            }
            let boxes = $('.mybox');
            for (let i = 0, il = boxes.length; i < il; i++) {
                boxes[i].style.visibility = 'hidden';
            }
            let responseDiv1 = $('#response');
            responseDiv1.innerHTML = '<br><br><div style="color:#f50057;font-weight:bold;">IMPORTANT!</div><br>You need a webcam to use this feature.<br><br>Please plug a webcam into your<br>computer and refresh the page.';
            responseDiv1.style.color = 'black';
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

    componentDidMount() {
        this.loading();
        $('.learning-button').click(function (event) {
            $('#image').innerHTML = "<img src='pngs edited/" + event.target.id + ".PNG' width='450px' height='450px'/>";
        });
    }

    render() {
        return (
            <div id="learn" className="col s12">
                <form method="POST" onSubmit={this.submitImage}>
                    <LearnButtonsComponent submitDisable={this.submitDisable.bind(this)}/>
                    <LearnCameraComponent imgID={this.state.imgID}/>
                </form>
            </div>
        );
    };
}
