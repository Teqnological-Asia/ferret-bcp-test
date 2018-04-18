import React, { Component } from 'react';
import DeliveryCancelList from './DeliveryCancelList';
import { removeElementFromArray } from '../../../utils';
import { Link } from 'react-router-dom';

class DeliveryCancel extends Component {
   constructor(props) {
    super(props);

    this.state = {
      numberOfRow: 0,
      selectedStockCodes: [],
      canSubmit: true
    }
  }

  componentDidMount() {
    this.props.loadDeliveriesRequest();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.cancelDeliveriesRequest(this.state.selectedStockCodes);
  }

  handleCheck = (stock_code, e) => {
    const target = e.target;

    var newNumberOfRow = this.state.numberOfRow;
    var selectedStockCodes = this.state.selectedStockCodes;

    if (target.checked) {
      newNumberOfRow = newNumberOfRow + 1;
      selectedStockCodes.push(stock_code);
    } else {
      newNumberOfRow = newNumberOfRow - 1;
      removeElementFromArray(selectedStockCodes, stock_code);
    }

    var newCanSubmit = (newNumberOfRow > 0) ? false : true;

    this.setState({
      numberOfRow: newNumberOfRow,
      selectedStockCodes: selectedStockCodes,
      canSubmit: newCanSubmit
    });
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">株式出庫 <b>予約確認</b></div>
            <div className="p-section_header_tools">
              <ul>
                <Link to="/account/delivery">
                  <i className="icon-right-open"></i>口座出庫依頼書はこちら
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <DeliveryCancelList deliveries={this.props.deliveries} handleCheck={this.handleCheck}/>

        <div className="u-mt40p">
          <button className="c-button c-button_delete" onClick={this.handleSubmit} disabled={this.state.canSubmit}>
            選択した項目の予約を取り消す
          </button>
        </div>
      </div>
    );
  }
}

export default DeliveryCancel;
