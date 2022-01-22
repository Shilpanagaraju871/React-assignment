import React from "react";

export default class Persons extends React.Component {
  handleClick = e => {
    this.props.person(e.target.value);
  };

  render() {
    let list = this.props.list;
    return (
      <div>
        <div>persons</div>
        {}
        <div>
          {list.map(each => (
            <span>
              <li key={each.id}>
                {each.name}
                <button onClick={this.handleClick} value={each.id}>
                  details
                </button>
              </li>
            </span>
          ))}
        </div>
      </div>
    );
  }
}
