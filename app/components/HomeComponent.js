const React = require('react');

export default class HomeComponent extends React.Component {
    render() {
        return (
            <div id="home" className="col s12">
                <br/><br/><br/><br/><br/>
                <div className="slider">
                    <ul className="slides">
                        <li>
                            <img src="http://cfile6.uf.tistory.com/image/2317924251A4B8BA31E3AF"/>
                            <div className="caption left-align">
                                <br/><br/><br/>
                                <h3>ensign</h3>
                                <h5 className="light grey-text text-lighten-3">a new tool for american sign
                                    language</h5>
                            </div>
                        </li>
                        <li>
                            <img src="http://cfile6.uf.tistory.com/image/2317924251A4B8BA31E3AF"/>
                            <div className="caption right-align">
                                <br/><br/><br/>
                                <h3>learn</h3>
                                <h5 className="light grey-text text-lighten-3">using open source computer vision
                                    technology</h5>
                            </div>
                        </li>
                        <li>
                            <img src="http://cfile6.uf.tistory.com/image/2317924251A4B8BA31E3AF"/>
                            <div className="caption left-align">
                                <br/><br/><br/>
                                <h3>practice</h3>
                                <h5 className="light grey-text text-lighten-3">signing letters and numbers</h5>
                            </div>
                        </li>
                        <li>
                            <img src="http://cfile6.uf.tistory.com/image/2317924251A4B8BA31E3AF"/>
                            <div className="caption right-align">
                                <br/><br/><br/>
                                <h3>translate</h3>
                                <h5 className="light grey-text text-lighten-3">english to asl</h5>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="row">
                </div>
                <div className="row">
                </div>
            </div>
        );
    };
}