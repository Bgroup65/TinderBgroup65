import React, { Component } from 'react';
import '../App.css';

class AgeInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            minAge: "",
            maxAge:""
        }
        this.minAgeHandle = this.minAgeHandle.bind(this);
        this.maxAgeHandle = this.maxAgeHandle.bind(this);
    }
    minAgeHandle(evt){
        const temp = evt.target.value;
        this.setState({minAge:temp}, function () {
            this.props.getMinAge(this.state.minAge);
        });
    }
    maxAgeHandle(evt){
        const temp = evt.target.value;
        this.setState({maxAge:temp}, function () {
            this.props.getMaxAge(this.state.maxAge);
        });
    }

    render(){
        return(
            <div>
                <h3>Choose partner age</h3>
                <label>&nbsp;Between&nbsp;</label>
                <input style={{color:"black"}} onChange={this.minAgeHandle} type="number" id="minAge" />
                <label>&nbsp;And&nbsp;</label>
                <input style={{color:"black"}} onChange={this.maxAgeHandle} type="number" id="maxAge"  />
                <br/>
                <br/>
            </div>
        );
    }
}

export default AgeInput;