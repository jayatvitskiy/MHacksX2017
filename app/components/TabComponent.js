const React = require('react');

export default class TabContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 pink accent-3 navbar">
                        <ul className="tabs">
                            <li className="tab col s3"><a className="active" href="#home">HOME</a></li>
                            <li className="tab col s3"><a href="#learn">LEARN</a></li>
                            <li className="tab col s3"><a href="#practice">PRACTICE</a></li>
                            <li className="tab col s3"><a href="#translate">TRANSLATE</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}