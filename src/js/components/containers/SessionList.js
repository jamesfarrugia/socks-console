import React from "react";
import { connect, Dispatch } from "react-redux";

import { doLoadSessions } from '../../actions/index'

import List from '../presentational/List'
import IP from '../presentational/IP'
import HumanBytes from '../presentational/HumanBytes'
import Speedo from '../presentational/Speedo'
import TimeSeries from '../presentational/TimeSeries'

import './session-list.scss'

const mapStateToProps = state => {
  return { sessions: state.sessions };
};

const mapDispatchToProps = dispatch => 
{
  return {
    doLoadSessions: () => dispatch(doLoadSessions(dispatch))
  };
};

class ConnectedSessionList extends React.Component 
{
  constructor() 
  {
    super();
  }

  componentDidMount() 
  {
    this.setState({intervalId: -1, interval: -1, history: []})
    this.onRefresh();
  }

  componentWillReceiveProps({sessions})
  {
    this.setState((s)=>{
      return {...s, history:[...s.history, {t: new Date().getTime(), count: sessions.length}]}
    })
  }

  onRefresh()
  {
    this.props.doLoadSessions();
  }

  setAutoRefresh(seconds)
  {
    this.setState((s) => {
      window.clearInterval(s.intervalId);
      if (seconds == -1)
      {
        return {...s, interval: seconds, intervalId: -1}
      }
      else
      {
        const intervalId = setInterval(this.onRefresh.bind(this), seconds * 1000)
        return {...s, interval: seconds, intervalId}
      }
    })
  }

  getReloadFreqClass(sec)
  {
    return "freq-link " + (this.state && this.state.interval == sec?"active":"");
  }

  getHistory()
  {
    return this.state? this.state.history:[];
  }

  render()
  {
    const ipView = (conn) => (
      <div className="row">
        <div className="col-2">
          <IP ip={conn.TargetIP}/>
        </div>
        <div className="col-3">
          🡷<HumanBytes bytes={conn.DataIn} />&nbsp;&nbsp;🡵<HumanBytes bytes={conn.DataOut} />
        </div>
        <div className="col-3">
          <Speedo conn={conn} />
        </div>
      </div>
    )
    return (
      <div>
        <strong>{this.props.sessions.length} sessions</strong>
        &nbsp;|&nbsp;
        <a href="javascript:void(0)" onClick={this.onRefresh.bind(this)}>Reload Now</a>
        &nbsp;|&nbsp;
        Every&nbsp;
          <span className={this.getReloadFreqClass(-1)} onClick={() => this.setAutoRefresh(-1)}>None</span> &nbsp;
          <span className={this.getReloadFreqClass(1)} onClick={() => this.setAutoRefresh(1)}>1s</span> &nbsp;
          <span className={this.getReloadFreqClass(5)} onClick={() => this.setAutoRefresh(5)}>5s</span>
        <List maxHeight="512px" items={this.props.sessions} fldId="ID" display={ipView} />
        <TimeSeries data={this.getHistory()} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedSessionList); 