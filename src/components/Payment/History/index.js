import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import moment from 'moment';
import PaymentHistoryList from './PaymentHistoryList';

class PaymentHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: '',
      to: '',
      fromSearch: '',
      toSearch: ''
    }
  }

  componentDidMount() {
    this.props.loadPaymentHistoriesRequest();
  }

  handleSearch = () => {
    const { from, to } = this.state;
    this.setState({
      fromSearch: from,
      toSearch: to
    });
  }

  render() {
    const { from, to, fromSearch, toSearch } = this.state;
    const filterDeliveryDate = (item) => {
      const deliveryDate = moment(item.delivery_date);

      if (fromSearch || toSearch) {
        if (fromSearch && toSearch) {
          return deliveryDate >= fromSearch && deliveryDate <= toSearch;
        } else if (from) {
          return deliveryDate >= fromSearch;
        } else {
          return deliveryDate <= toSearch;
        }
      } else {
        return item;
      }
    };
    const paymentHistories = this.props.paymentHistories.filter(filterDeliveryDate);

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title"> 入出金状況 </div>
            <div className="p-section_header_aside">※本日以降の入出金状況を表示しています。過去の入出金状況は、取引履歴にてご確認ください。</div>
          </div>
        </div>
        {/* <div className="u-mt20p">
          <div className="p-section_search">
            <div className="p-section_search_item">
              <div className="p-section_search_item_head">
                <label>期間指定</label>
              </div>
              <div className="p-section_search_item_body">
                <div className="p-form-object_calender">
                  <i className="icon-calendar-empty"></i>
                  <Flatpickr value={from} onChange={from => {this.setState({from: from[0]})}} />
                </div>
                <span>から</span>
                <div className="p-form-object_calender">
                  <i className="icon-calendar-empty"></i>
                  <Flatpickr value={to} onChange={(to) => this.setState({to: to[0]})} />
                </div>
                <span>まで</span>
              </div>
            </div>
            <div className="p-section_search_item">
              <div className="p-section_search_item_body">
                <input className="c-button c-button_small" type="button" value="検索" onClick={this.handleSearch}/>
              </div>
            </div>
          </div>
        </div> */}
        <div className="u-mt20p">
          <PaymentHistoryList paymentHistories={paymentHistories} />
        </div>
      </div>
    );
  }
}

export default PaymentHistory;
