import React, { Component } from 'react';
import PhysicalList from './PhysicalList';

class Physical extends Component {
  componentDidMount() {
    this.props.loadPhysicalsRequest();
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">現物株式 <b>売却</b></div>
          </div>
        </div>

        <PhysicalList physicals={this.props.physicals} />
      </div>
    );
  }
}

export default Physical;