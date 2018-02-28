import React, { Component } from "react";
import PropTypes from 'prop-types'

class IP extends React.Component 
{
  constructor() 
  {
    super();
  }

  render()
  {
    const arr = atob(this.props.ip)
    return (
        <code>{arr.charCodeAt(0)}.{arr.charCodeAt(1)}.{arr.charCodeAt(2)}.{arr.charCodeAt(3)}</code>
    );
  }
}

IP.propTypes = {
  ip: PropTypes.string.isRequired
}

IP.defaultProps = {
  ip: "MCwwLDAsMA=="
}

export default IP;