import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import moment from 'moment';
import Pagination from '../../Authenticated/Pagination';
import TradeHistoryList from './TradeHistoryList';

class TradeHistory extends Component {
  constructor(props) {
    super(props);

    let fromDate = new Date();
    const toDate = new Date();
    fromDate.setDate(fromDate.getDate() - 90);

    this.state = {
      from: fromDate,
      to: toDate
    }
  }

  componentWillMount() {
    this.props.loadTradeHistoriesRequest({page: 1});
  }

  handlePageChange = page => {
    this.props.loadTradeHistoriesRequest({page});
  }

  handleSearch = (e) => {
    e.preventDefault();
    let { from, to } = this.state;
    from = from ? moment(from).format('YYYYMMDD') : null;
    to = to ? moment(to).format('YYYYMMDD') : null;

    this.props.loadTradeHistoriesRequest({from, to});
  }

  render() {
    const { tradeHistories, currentPage, totalPages } = this.props;
    const { from, to } = this.state;
    const showPagination = tradeHistories.length > 0;

    const pagination = (
      showPagination &&
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={this.handlePageChange}
        />
    );

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">取引履歴</div>
            <div className="p-section_header_aside">※前日までのお取引が表示されます。</div>
          </div>
        </div>

        <div className="u-mt20p">
          <div className="p-section_search">
            <div className="p-section_search_item">
              <div className="p-section_search_item_head">
                <label>期間指定</label>
              </div>
              <div className="p-section_search_item_body">
                <div className="p-form-object_calender"><i className="icon-calendar-empty"></i>
                  <Flatpickr value={from} onChange={from => {this.setState({from: from[0]})}} />
                </div><span>から</span>
                <div className="p-form-object_calender"><i className="icon-calendar-empty"></i>
                  <Flatpickr value={to} onChange={(to) => this.setState({to: to[0]})} />
                </div><span>まで</span>
              </div>
              <div className="p-section_search_item_head">
                <label>表示</label>
              </div>
              <div className="p-section_search_item_body">
                <label className="p-form-object_label">
                  <input type="checkbox"/>すべて
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>現物
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>譲渡益税
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>入出庫
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>配当金
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>入金
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>出金
                </label>
              </div>
            </div>
            <div className="p-section_search_item">
              <div className="p-section_search_item_body">
                <input className="c-button c-button_small" type="button" value="検索" onClick={this.handleSearch}/>
              </div>
            </div>
          </div>
        </div>

        <div className="u-mt40p">
          <TradeHistoryList tradeHistories={tradeHistories} />
          {pagination}
        </div>
      </div>
    );
  }
}

export default TradeHistory;