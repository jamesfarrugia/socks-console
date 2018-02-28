import React from "react";
import { connect } from "react-redux";

import List from '../presentational/List'

const mapStateToProps = state => {
  return { sessions: state.sessions };
};

const ConnectedSessionList = ({ sessions }) => (
  <List items={sessions} fldId="id" fldDisplay="name" />
);

const SessionList = connect(mapStateToProps)(ConnectedSessionList);

export default SessionList;