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
                    <i className="icon-right-open"></i>売却はこちら
                  </Link>
                </li>
                {/* <li>
                  <Link to="/account/fractional/clame">
                    <i className="icon-right-open"></i>買取請求はこちら
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <FractionalCancelList fractionals={this.props.fractionals} handleCheck={this.handleCheck} />
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>※注文の数量を訂正する場合は、一旦注文の取消後、再度注文を発注ください。</p>
            <p>※注文の取消は23:59まで可能です。</p>
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
