import React, { Component } from "react";
import PropTypes from 'prop-types'

class List extends Component 
{
  constructor() 
  {
    super();
  }

  render()
  {
    const listStyle={maxHeight:this.props.maxHeight?this.props.maxHeight:"100px", overflow:'auto'}

    return (
      <ul className="list-group list-group-flush" style={listStyle}>
        {this.props.items.map(el => (
          <li className="list-group-item" key={el[this.props.fldId]}>
            {this.props.display?this.props.display(el):el[this.props.fldId]}
          </li>
        ))}
      </ul>
    );
  }
}

List.propTypes = {
  fldId: PropTypes.string.isRequired,
  display: PropTypes.func,
  items: PropTypes.array.isRequired
}

List.defaultProps = {
  fldId: "id",
  items: []
}

export default List;