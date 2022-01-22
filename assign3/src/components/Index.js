import React from "react";
import reactDom from "react-dom";
import Persons from "./persons.js";
import Person from "./Person.js";
// import "./styles.css";

const persons = [
  { id: 1, name: "Shilpa", gender: "f", age: 23 },
  { id: 2, name: "kavana", gender: "f", age: 22 },
  { id: 3, name: "Gopinath", gender: "m", age: 23 }
];

class Index extends React.Component {
  state = {
    id: 0
  };

  setPerson = newId => {
    console.log(newId);
    this.setState({
      id: newId
    });
  };

  render() {
    return (
      <div>
        <Persons list={persons} person={this.setPerson} />
        {this.state.id ? (
          <Person person={persons.find(each => each.id == this.state.id)} />
        ) : null}
      </div>
    );
  }
}

reactDom.render(<Index />, document.getElementById("root"));

export default Index
