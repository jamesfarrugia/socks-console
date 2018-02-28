import React, { Component } from "react";


class List extends Component 
{
  constructor() 
  {
    super();
  }

  render()
  {
    return (
      <ul className="list-group list-group-flush">
        {this.props.items.map(el => (
          <li className="list-group-item" key={el[this.props.fldId]}>
            {el[this.props.fldDisplay]}
          </li>
        ))}
      </ul>
    );
  }

}

export default List;