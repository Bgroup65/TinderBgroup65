import React, { Component } from 'react';
import './App.css';

import FillDetails from "./components/Details";
import NavbarPage from './components/Header';
import PersonCard from "./components/person";
import personFromDB from './components/persons';
import { Route,withRouter } from 'react-router';


class App extends Component {
  constructor(props) {
    super(props);
    this.ValidateInputs = this.ValidateInputs.bind(this);
    this.state = {
      personList : []
    }
  }
  //validate user inputs before moving to next page
  ValidateInputs(isValid, minAge, maxAge, gender) {
    if (!isValid) {
      alert("input's not valid!");
      this.props.history.push("/");
    }
    else {
      //filter users according to user choice and navigate to user's choice of people
      const temp = personFromDB.filter((p) =>
        p.age >= minAge && p.age <= maxAge && p.gender === gender
      );
      if (temp.length === 0) {
        alert("Nothing to show:(");
        this.props.history.push("/");
      }
      else {
        //route to the person page with filtered list of people
        this.setState({ personList: temp }, () => { this.props.history.push("/results") });
      }
    }
  }

  render() {
    return (

      <div className="App">
        <NavbarPage name="Look for new people in Tinder" desc="Bgroup65" />
        <header className="App-header">
          <div>
            <Route exact path='/'
              component={() => <FillDetails valid={this.ValidateInputs} />}
            />
            <Route
              path="/results"
              component={() => <PersonCard personList={this.state.personList} />}
            />
          </div>
        </header>
      </div>

    );
  }
}





export default withRouter(App);
