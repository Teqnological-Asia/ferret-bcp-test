import React, { Component } from "react";
import Flatpickr from "react-flatpickr";
import Pagination from "../../Authenticated/Pagination";
class LendingHistory extends Component {
  constructor(props) {
    super(props);

    let fromDate = new Date();
    const toDate = new Date();
    fromDate.setDate(fromDate.getDate() - 90);

    this.state = {
      from: fromDate,
      to: toDate,
      checkAll: true,
      equity: true,
      margin: true,
      capital_gain_tax$capital_gain_refund: true,
      shipment$receipt: true,
      dividend: true,
      deposit: true,
      withdraw: true,
      other: true
    };

    this.types = [
      "equity",
      "margin",
      "capital_gain_tax$capital_gain_refund",
      "shipment$receipt",
      "dividend",
      "deposit",
      "withdraw",
      "other"
    ];
  }
  render() {
    const { tradeHistories, currentPage, totalPages } = this.props;
    const { from, to } = this.state;
    const showPagination = tradeHistories.length > 0;
    const pagination = showPagination && (
      <Pagination
        boundaryPagesRange={0}
        siblingPagesRange={2}
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={this.handlePageChange}
      />
    );
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">貸株履歴</div>
            <div className="p-section_header_aside">
              ※貸株履歴への反映は約定日の16時頃に行われます。
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_search">
            <div className="p-section_search_item">
              <div className="p-section_search_item_head">
                <label>期間指定</label>
              </div>
              <div className="p-section_search_item_body" style={{display: 'flex'}}>
                <div className="p-form-object_calender">
                  <i className="icon-calendar-empty"></i>
                  <Flatpickr
                    value={from}
                    onChange={from => {
                      this.setState({ from: from[0] });
                    }}
                  />
                </div>
                <span>から</span>
                <div className="p-form-object_calender">
                  <i className="icon-calendar-empty"></i>
                  <Flatpickr
                    value={to}
                    onChange={to => this.setState({ to: to[0] })}
                  />
                </div>
                <span>まで</span>
                <div className="p-section_search_item">
                <div className="p-section_search_item_body">
                  <input
                    className="c-button c-button_small"
                    type="button"
                    value="検索"
                  />
                </div>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LendingHistory;