import React from 'react';

export default class PracticeReadyComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="chip pink accent-3 white-text chipPractice">get ready in</div>
                <div className="chip chip1 chipPractice" id="chip6">one</div>
                <div className="chip chip2 chipPractice" id="chip7">two</div>
                <div className="chip chip3 chipPractice" id="chip8">three</div>
                <div className="chip chip4 chipPractice" id="chip9">four</div>
                <div className="chip chip5 chipPractice" id="chip10">five</div>
            </div>
        );
    };
}