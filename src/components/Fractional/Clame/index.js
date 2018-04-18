import React, { Component } from 'react';
import FractionalClameList from './FractionalClameList';
import FractionalClameSummary from './FractionalClameSummary';
import { removeElementFromArray } from '../../../utils';
import { Link } from 'react-router-dom';

class FractionalClame extends Component {
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
    this.props.buySellFractionalRequest(2, this.state.selectedStockCodes);
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
            <div className="p-section_header_title">単元未満株式 <b>買取請求</b></div>
            <div className="p-section_header_tools">
              <ul>
                <li>
                  <Link to="/account/fractional/sell">
                    <i className="icon-right-open"></i>売却サービスはこちら
                  </Link>
                </li>
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
          <FractionalClameList fractionals={this.props.fractionals} handleCheck={this.handleCheck}/>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>※一注文につき、約定代金の1.08%（税込み）の手数料がかかります。</p>
            <p>※約定は売却サービス受付日の翌営業日の前場始値となります。前場で取引が成立しない場合は「失効」となりますので、売却を継続される場合には、再度申し込みください。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="c-table_inputs">
            <FractionalClameSummary numberOfRow={this.state.numberOfRow}
              numberOfStock={this.state.numberOfStock} />
          </div>
        </div>
        <div className="u-mt20p">
          <button className="c-button" onClick={this.handleSubmit} disabled={this.state.canSubmit}>買取請求申込みする</button>
        </div>
      </div>
    )
  };
}

export default FractionalClame;
