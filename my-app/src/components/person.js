import React, { Component } from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import AlignItemsList from './Favorits';
import { Route,withRouter } from 'react-router';
import { Button } from '@material-ui/core';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            person: this.props.personList[0],
            hobbies: this.props.personList[0].hobbies,
            favorites: []
        }
        this.NextPerson = this.NextPerson.bind(this);
    }

    NextPerson(like) {
        if (like === 1) {
            const temp = this.props.personList[this.state.counter];
            this.setState(prevState => ({
                favorites: [...prevState.favorites, temp]
              }))
        }


        if (this.state.counter === (this.props.personList.length - 1)) {
            if (this.state.favorites.length === 0) {
                alert("you picked no favorites!");
                this.props.history.push("/");
            }
            else {
                this.setState({person:""})
             }
        }
        else {
            const temp = this.state.counter + 1;
            this.setState({ counter: temp }, () => {
                if (this.props.personList[this.state.counter].premium) {
                    this.setState({ person: this.props.personList[this.state.counter], hobbies: this.props.personList[this.state.counter].hobbies[this.state.counter] });
                }
                else this.setState({ person: this.props.personList[this.state.counter] });
            })
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                   {this.state.person && <Card style={{
                        width: 450,
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}>
                        <CardMedia
                            //overlay title would be the name of person
                            overlay={<CardTitle title={this.state.person.Name + " " + this.state.person.FamilyName} />}
                        >
                            <img height="280" src={this.state.person.Image} alt="" />
                        </CardMedia>
                        <CardTitle title={"Age: " + this.state.person.Age} subtitle={"Height: " + this.state.person.Height + ", Location: " + this.state.person.Address} />
                        <CardText>
                            {this.state.person.Hobbies && "Hobbies: " + this.state.person.Hobbies.map((h) => {
                                return h + " "
                            })
                            }
                        </CardText>
                        <CardActions>
                            <FlatButton onClick={() => this.NextPerson(0)} label="Next"><IoIosArrowRoundForward /></FlatButton>
                            <FlatButton onClick={() => this.NextPerson(1)} label="Like" ><IoIosHeart style={{ color: "red" }} /></FlatButton>
                        </CardActions>
                    </Card>}

                    <AlignItemsList title="Favorite People" persons = {this.state.favorites}/>
                    {this.state.counter=== (this.props.personList.length - 1) && <Button onClick={()=>this.props.history.push('/')}  style={{color:"white"}}>Back To Main</Button>}
                </div>
            </MuiThemeProvider>
        );
    }
}


export default withRouter(PersonCard);