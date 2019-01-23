import React, { Component } from 'react';
import { GoSearch } from "react-icons/go";

class GenderInput extends React.Component{
constructor(props){
    super(props);
    this.state = {
        gender:""
    }
    this.setGender = this.setGender.bind(this);
}
setGender(event){
    this.setState({gender:event.target.value}, function () {
        this.props.genderType(this.state.gender);
    });
}
render(){
    return (
        <div>
            <h3>Choose partner gender: </h3>
            <div onChange={this.setGender}>
                <input type='radio' name="gender" value="male"/>
                <label>Male</label>
                <br/>
                <input type='radio' name="gender" value="female"/>
                <label>Female</label>
            </div>
            <br/>
            <br/>
        </div>
    );
}

}

export default GenderInput