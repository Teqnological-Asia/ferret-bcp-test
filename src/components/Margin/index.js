import React, { Component } from 'react';
import MarginTable from './MarginTable';

class Margin extends Component {
  render() {
    const marginPositions = this.props.marginPositions

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">信用決済</div>
          </div>
        </div>
        {
          marginPositions.length > 0 ?
          <MarginTable marginPositions={marginPositions}/> :
          <div className="p-section_lead u-mt20p">
            <p className="p-no_item">0 item（表示する内容がない場合　文言要確認）</p>
          </div>
        }
      </div>
    )
  }
}

export default Margin;