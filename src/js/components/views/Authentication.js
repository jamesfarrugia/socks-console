
import React from "react";
import List from "../presentational/List";
import { connect } from "react-redux";
import { doLoadUsers } from '../../actions/index'

const mapStateToProps = state => {
    return { users: state.users,
             usersError: state.usersError };
  };
  
class ConnectedAuthenticationView extends React.Component 
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
              {user.Username} - {user.Enabled?"Enabled":"Disabled"}
            </div>
          )

        return (
        <div>
            <h1>Authentication</h1>
            {this.props.usersError?
              <div className="alert alert-danger" role="alert">
                {this.props.usersError.message}
              </div>
              :
              <List maxHeight="512px" items={this.props.users} fldId="Username" display={userView}/>
            }
        </div>
        );
    }
}

export default connect(mapStateToProps)(ConnectedAuthenticationView); 