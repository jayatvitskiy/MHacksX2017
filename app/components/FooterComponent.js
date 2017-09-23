const React = require('react');

export default class FooterComponent extends React.Component {
    render() {
        return (
            <div id="footer" className="page-footer purple lighten-3">
                Team Members: Akshay Subramaniam, Jake Jacob Yatvitskiy, Rakshit Gogia, Neel Pujari
                <br/><b>Made for M Hacks X</b>
            </div>
        );
    };
}