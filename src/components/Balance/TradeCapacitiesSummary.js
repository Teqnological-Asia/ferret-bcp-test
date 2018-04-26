import React, { Component }  from 'react';
import { formatCurrency, formatDateTime } from '../../utils';

class TradeCapacitiesSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curDateTime: new Date(),
    };
  }

  reloadData = () => {
    this.props.loadBalanceRequest();
    this.setState({curDateTime: new Date()});
  }

  render() {
    if (this.props.tradeCapacities === undefined || this.props.tradeCapacities.length === 0) {
      return null;
    }

    return (
      <div className="p-lives u-mt40p">
        <div className="p-section_header">
          <div className="p-section_header_title">口座余力</div>
          <div className="p-section_header_aside">
            <span> {formatDateTime(this.state.curDateTime)} </span>
            (<a className="icon-arrows-ccw cursor" onClick={this.reloadData}>更新</a>）
          </div>
        </div>
        <div className="p-life">
          <div className="p-life_head">買付余力</div>
          <div className="p-life_body">
            {formatCurrency(this.props.tradeCapacities[3].equity_trading_power)}
            <span className="p-unit">円</span>
          </div>
        </div>
        {/*
        <div className="p-life">
          <div className="p-life_head"> 信用余力</div>
          <div className="p-life_body">3,000,000<span className="p-unit">円</span></div>
        </div>
        */}
        <div className="p-life">
          <div className="p-life_head"> 出金可能額</div>
          <div className="p-life_body">
            {formatCurrency(this.props.tradeCapacities[3].withdrawable)}
            <span className="p-unit">円</span>
          </div>
        </div>
        {/*
        <div className="p-life">
          <div className="p-life_head"> 現引可能額</div>
          <div className="p-life_body">1,000,000<span className="p-unit">円</span></div>
        </div>
        */}
      </div>
    );
  }
}

export default TradeCapacitiesSummary;
