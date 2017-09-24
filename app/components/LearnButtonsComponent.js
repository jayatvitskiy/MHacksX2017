import React from 'react';

export default class LearnButtonComponent extends React.Component {
    render() {
        let arr1 = [];
        for (let i = 0; i <= 11; i ++) {
            arr1.push(i);
        }
        let arr2 = [];
        for (let i = 12; i <= 23; i ++) {
            arr2.push(i);
        }
        let arr3 = [];
        for (let i = 24; i <= 25; i ++) {
            arr3.push(i);
        }
        let arr4 = [];
        for (let i = 0; i <= 9; i ++) {
            arr4.push(i);
        }

        return (
            <div>
                <div className="row">
                    {
                        arr1.map((number) => (
                            <div key={String.fromCharCode(65 + number)} className="col s1" onClick={()=>{this.props.submitDisable(String.fromCharCode(65 + number))}}><a className="waves-effect waves-light btn pink accent-3 learning-button" id={String.fromCharCode(65 + number)} >{String.fromCharCode(65 + number)}</a></div>
                        ))
                    }
                </div>
                <div className="row">
                    {
                        arr2.map((number) => (
                            <div key={String.fromCharCode(65 + number)} className="col s1" onClick={()=>{this.props.submitDisable(String.fromCharCode(65 + number))}}><a className="waves-effect waves-light btn pink accent-3 learning-button" id={String.fromCharCode(65 + number)} >{String.fromCharCode(65 + number)}</a></div>
                        ))
                    }
                </div>
                <div className="row">
                    {
                        arr3.map((number) => (
                            <div key={String.fromCharCode(65 + number)} className="col s1" onClick={()=>{this.props.submitDisable(String.fromCharCode(65 + number))}}><a className="waves-effect waves-light btn pink accent-3 learning-button" id={String.fromCharCode(65 + number)} >{String.fromCharCode(65 + number)}</a></div>
                        ))
                    }
                    {
                        arr4.map((number) => (
                            <div key={number} className="col s1" onClick={()=>{this.props.submitDisable(number)}}><a className="waves-effect waves-light btn pink accent-3 learning-button" id={number}>{number}</a></div>
                        ))
                    }
                </div>
            </div>
        );
    };
}