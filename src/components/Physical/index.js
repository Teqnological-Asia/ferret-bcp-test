import React, { Component } from 'react';
import PhysicalList from './PhysicalList';
import { formatDateTime } from '../../utils';

class Physical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curDateTime: new Date(),
    };
  }

  componentDidMount() {
    this.props.loadPhysicalsRequest();
    this.props.createOrderSuccess();
  }

  reloadData = () => {
    this.props.loadPhysicalsRequest();
    this.setState({curDateTime: new Date()});
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">現物株式 <b>売却</b></div>
            <div className="p-section_header_aside">
              <span> {formatDateTime(this.state.curDateTime)} </span>
              (<a className="icon-arrows-ccw cursor" onClick={this.reloadData}>更新</a>）
            </div>
          </div>
        </div>

        <PhysicalList physicals={this.props.physicals} /> 
      </div>
    );
  }
}

export default Physical;