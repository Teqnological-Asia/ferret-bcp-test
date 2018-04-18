import React, { Component } from 'react';
import FractionalCancelList from './FractionalCancelList';
import { removeElementFromArray } from '../../../utils';
import { Link } from 'react-router-dom';

class FractionalCancel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfRow: 0,
      selectedStockCodes: [],
      canSubmit: true
    }
  }

  componentDidMount() {
    this.props.loadFractionalsShowRequest();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.cancelFractionalsRequest(this.state.selectedStockCodes);
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
            <div className="p-section_header_title">単元未満株式 <b>売却／買取 依頼予約確認</b></div>
            <div className="p-section_header_tools">
              <ul>
                <li>
                  <Link to="/account/fractional/sell">
                    <i className="icon-right-open"></i>売却サービスはこちら
                  </Link>
                </li>
                <li>
                  <Link to="/account/fractional/clame">
                    <i className="icon-right-open"></i>買取請求はこちら
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <FractionalCancelList fractionals={this.props.fractionals} handleCheck={this.handleCheck} />
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>※注文の訂正はできません。訂正する場合には一旦注文の取消後、再度注文を発注ください。</p>
            <p>※単元未満株式売却注文取消は指示当日の16時まで可能です。</p>
            <p>※単元未満株式買取請求の取消は指示当日の24時まで可能です。</p>
            <p>※単元未満株式買取請求は特定口座から一般口座への払出を行い取扱いいたします。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <button className="c-button" onClick={this.handleSubmit} disabled={this.state.canSubmit}>取り消す</button>
        </div>
      </div>
    );
  }
}

export default FractionalCancel;
