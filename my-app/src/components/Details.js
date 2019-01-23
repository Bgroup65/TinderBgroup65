import React, { Component } from 'react';

import Button from './Button';
import GenderInput from './GenderInput';
import AgeInput from './AgeInput';

class FillDetails extends Component{
    constructor(props){
        super(props);
        this.getMaxAgeInput = this.getMaxAgeInput.bind(this);
        this.getMinAgeInput = this.getMinAgeInput.bind(this);
        this.getGender = this.getGender.bind(this);
        this.validate = this.validate.bind(this);
        this.state = {
          minimumAge: "",
          maximumAge:"",
          gender: ""
        }
    }

    getMinAgeInput(minAge) {
        this.setState({ minimumAge: minAge });
    }

    getMaxAgeInput(maxAge) {
        this.setState({ maximumAge: maxAge });
    }

    getGender(gender) {
        this.setState({ gender: gender });
    }

    validate(isValid){
        if (this.state.gender === "" || !isValid) {
            this.props.valid(false);
        }
        else this.props.valid(true,this.state.minimumAge,this.state.maximumAge,this.state.gender);
    }

    render(){
        return (
            <div>
                <GenderInput genderType={this.getGender} />
                <AgeInput getMaxAge={this.getMaxAgeInput} getMinAge={this.getMinAgeInput} />
                <Button valid={this.validate} minAge={this.state.minimumAge} maxAge={this.state.maximumAge} />
            </div>
        );
    }
}

export default FillDetails;