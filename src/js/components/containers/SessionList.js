import React from "react";
import { connect, Dispatch } from "react-redux";

import { doLoadSessions } from '../../actions/index'

import List from '../presentational/List'
import IP from '../presentational/IP'
import HumanBytes from '../presentational/HumanBytes'

const mapStateToProps = state => {
  return { sessions: state.sessions };
};

class ConnectedSessionList extends React.Component 
{
  constructor() 
  {
    super();
  }

  componentDidMount() 
  {
    let disp = this.props.dispatch;
    disp(doLoadSessions(disp))
  }

  render()
  {
    const ipView = (conn) => (
      <div className="row">
        <div className="col-2">
          <IP ip={conn.TargetIP}/>
        </div>
        <div className="col-8">
          🡷<HumanBytes bytes={conn.DataIn} />&nbsp;&nbsp;🡵<HumanBytes bytes={conn.DataOut} />
        </div>
      </div>
    )
    return (
      <List maxHeight="512px" items={this.props.sessions} fldId="ID" display={ipView} />
    );
  }
}

export default connect(mapStateToProps)(ConnectedSessionList); 