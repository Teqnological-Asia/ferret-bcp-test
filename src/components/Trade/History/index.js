import React, { Component } from 'react';
import Pagination from '../../Authenticated/Pagination';
import TradeHistoryList from './TradeHistoryList';

class TradeHistory extends Component {
  componentWillMount() {
    this.props.loadTradeHistoriesRequest({page: 1});
  }

  handlePageChange = page => {
    this.props.loadTradeHistoriesRequest({page: page});
  }

  render() {
    const { tradeHistories, currentPage, totalPages } = this.props;
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
                  <input className="dates" type="text" placeholder="2018/9/10"/>
                </div><span>から</span>
                <div className="p-form-object_calender"><i className="icon-calendar-empty"></i>
                  <input className="dates" type="text" placeholder="" data-mindate="today"/>
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
                  <input type="checkbox"/>制度信用
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>一般信用
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
                <input className="c-button c-button_small" type="button" value="検索"/>
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