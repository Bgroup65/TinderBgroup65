import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {withRouter } from 'react-router';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";


class PersonCard  extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:0,
            person: this.props.personList[0],
            hobbies: this.props.personList[0].hobbies
        }
        this.NextPerson = this.NextPerson.bind(this);
    }

    NextPerson(){
        if (this.state.counter === (this.props.personList.length-1)) {
            alert("Done!");
            this.props.history.push("/");
        }
        else {
            const temp = this.state.counter + 1;
            this.setState({ counter: temp }, () => {
                if (this.props.personList[this.state.counter].premium) {
                    this.setState({ person: this.props.personList[this.state.counter],hobbies:this.props.personList[this.state.counter].hobbies[this.state.counter] });
                }
                else this.setState({person: this.props.personList[this.state.counter]});
            })
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <Card style={{
                    width: 450,
                    marginLeft: "auto",
                    marginRight: "auto"
                }}>
                    <CardMedia
                        //overlay title would be the name of person
                        overlay={<CardTitle title={this.state.person.name} />}
                    >
                        <img  height="280" src={this.state.person.image} alt="" />
                    </CardMedia>
                    <CardTitle title={"Age: " + this.state.person.age} subtitle={"Height: " + this.state.person.height + ", Location: " + this.state.person.location }/>
                    <CardText>
                        {this.state.person.hobbies && "Hobbies: " + this.state.person.hobbies.map((h) => {
                            return h + " "
                        })
                        }
                    </CardText>
                    <CardActions>
                        <FlatButton onClick={this.NextPerson} label="Next"><IoIosArrowRoundForward/></FlatButton>
                        <FlatButton  onClick={this.NextPerson} label="Like" ><IoIosHeart  style={{color:"red"}} /></FlatButton>
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        )
    }
}


export default withRouter(PersonCard);