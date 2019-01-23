import React, { Component } from 'react';
import { GoSearch } from "react-icons/go";

class Button extends React.Component{
    constructor(props){
        super(props);
        this.Validated = this.Validated.bind(this);
    }
    Validated(){
       //check age and partner input.
       if (this.props.minAge<18 || this.props.minAge === "" || this.props.maxAge === "") {
           this.props.valid(false);
       }
       else this.props.valid(true);
    }
    render(){
        return (
            <button style={{color:"black"}} onClick={this.Validated}>Find! <GoSearch/></button>
        );
    }
}

export default Button