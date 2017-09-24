import React from 'react';

export default class HomeComponent extends React.Component {
    render() {
        return (
            <div id="home" className="col s12">
                <div className="slider">
                    <ul className="slides">
                        <li>
                            <img src="http://cfile6.uf.tistory.com/image/2317924251A4B8BA31E3AF"/>
                            <div className="caption left-align">
                                <br/><br/><br/>
                                <h3>The Helping Hand</h3>
                                <h5 className="light grey-text text-lighten-3">A handy tool for novice American Sign Language learners</h5>
                            </div>
                        </li>
                        <li>
                            <img src="http://cfile6.uf.tistory.com/image/2317924251A4B8BA31E3AF"/>
                            <div className="caption right-align">
                                <br/><br/><br/>
                                <h3>Learn ASL</h3>
                                <h5 className="light grey-text text-lighten-3">Using open source computer vision technology</h5>
                            </div>
                        </li>
                        <li>
                            <img src="http://cfile6.uf.tistory.com/image/2317924251A4B8BA31E3AF"/>
                            <div className="caption left-align">
                                <br/><br/><br/>
                                <h3>Practice Your ASL</h3>
                                <h5 className="light grey-text text-lighten-3">Signalling letters and numbers</h5>
                            </div>
                        </li>
                        <li>
                            <img src="http://cfile6.uf.tistory.com/image/2317924251A4B8BA31E3AF"/>
                            <div className="caption right-align">
                                <br/><br/><br/>
                                <h3>Translate to ASL</h3>
                                <h5 className="light grey-text text-lighten-3">English to ASL</h5>
                            </div>
                        </li>
                    </ul>
                </div>
                <br/>
            </div>
        );
    };
}