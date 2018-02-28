import React from "react";
import { connect, Dispatch } from "react-redux";

import { doLoadUsers } from '../../actions/index'

import List from '../presentational/List'

const mapStateToProps = state => {
  return { users: state.users };
};

class ConnectedUserList extends React.Component 
{
  constructor() 
  {
    super();
  }

  componentDidMount() 
  {
    let disp = this.props.dispatch;
    disp(doLoadUsers(disp))
  }

  render()
  {
    const userView = (user) => (
      <div className="row">
        user
      </div>
    )
    return (
      <List maxHeight="512px" items={this.props.users} fldId="Username" display={userView} />
    );
  }
}

export default connect(mapStateToProps)(ConnectedUserList); 