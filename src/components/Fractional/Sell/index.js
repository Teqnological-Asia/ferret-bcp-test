import React, { Component } from 'react';
import FractionalSellList from './FractionalSellList';
import FractionalSellSummary from './FractionalSellSummary';
import { Link } from 'react-router-dom';
import { removeElementFromArray } from '../../../utils';

class FractionalSell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfRow: 0,
      numberOfStock: 0,
      selectedStockCodes: [],
      canSubmit: true
    }
  }

  componentDidMount() {
    this.props.loadFractionalsRequest();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.buySellFractionalRequest(1, this.state.selectedStockCodes);
  }

  handleCheck = (stock_code, quantity, e) => {
    const target = e.target;

    var newNumberOfRow = this.state.numberOfRow;
    var newNumberOfStock = this.state.numberOfStock;
    var selectedStockCodes = this.state.selectedStockCodes;

    if (target.checked) {
      newNumberOfRow = newNumberOfRow + 1;
      newNumberOfStock = newNumberOfStock + quantity;
      selectedStockCodes.push(stock_code);
    } else {
      newNumberOfRow = newNumberOfRow - 1;
      newNumberOfStock = newNumberOfStock - quantity;
      removeElementFromArray(selectedStockCodes, stock_code);
    }

    var newCanSubmit = (newNumberOfRow > 0) ? false : true;

    this.setState({
      numberOfRow: newNumberOfRow,
      numberOfStock: newNumberOfStock,
      selectedStockCodes: selectedStockCodes,
      canSubmit: newCanSubmit
    });
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">単元未満株式 <b>売却サービス</b></div>
            <div className="p-section_header_tools">
              <ul>
                {/* <li>
                  <Link to="/account/fractional/clame">
                    <i className="icon-right-open"></i>買取請求はこちら
                  </Link>
                </li> */}
                <li>
                  <Link to="/account/fractional/cancel">
                    <i className="icon-info-circled"></i>予約確認はこちら（当日のみ)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <FractionalSellList fractionals={this.props.fractionals} handleCheck={this.handleCheck} />
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>※一注文につき、約定代金の1%（+消費税）の手数料がかかります。</p>
            <p>※約定単価は注文受付日の翌営業日の前場始値となります。前場で取引が成立しない場合は「失効」となりますので、売却を継続される場合には再度お申込みください。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="c-table_inputs">
            <FractionalSellSummary
              numberOfRow={this.state.numberOfRow}
              numberOfStock={this.state.numberOfStock}
            />
          </div>
        </div>
        <div className="u-mt20p">
          <button className="c-button" onClick={this.handleSubmit} disabled={this.state.canSubmit}>売却申し込みする</button>
        </div>
      </div>
    );
  }
}

export default FractionalSell;
