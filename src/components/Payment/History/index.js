import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import PaymentHistoryList from './PaymentHistoryList';

class PaymentHistory extends Component {
  componentDidMount() {
    this.props.loadPaymentHistoriesRequest();
  }

  render() {
    const { paymentHistories } = this.props;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">入出金 <b>履歴</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_search">
            <div className="p-section_search_item">
              <div className="p-section_search_item_head">
                <label>期間指定</label>
              </div>
              <div className="p-section_search_item_body">
                <div className="p-form-object_calender">
                  <i className="icon-calendar-empty"></i>
                  <input className="dates" type="text" placeholder="2018/9/10"/>
                </div>
                <span>から</span>
                <div className="p-form-object_calender"><i className="icon-calendar-empty"></i>
                  <input className="dates" type="text" placeholder="" data-mindate="today"/>
                </div><span>まで</span>
              </div>
            </div>
            <div className="p-section_search_item">
              <div className="p-section_search_item_body">
                <input className="c-button c-button_small" type="button" value="検索"/>
              </div>
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <PaymentHistoryList paymentHistories={paymentHistories} />
        </div>
      </div>
    );
  }
}

export default PaymentHistory;
