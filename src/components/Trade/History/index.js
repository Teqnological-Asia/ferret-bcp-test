import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import moment from 'moment';
import PropTypes from 'prop-types';
import Pagination from '../../Authenticated/Pagination';
import TradeHistoryList from './TradeHistoryList';

class TradeHistory extends Component {
  getChildContext() {
    const { currentPage, totalPages } = this.props;
    return { currentPage, totalPages };
  }

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
      capital_gain_tax$capital_gain_refund: true,
      shipment$receipt: true,
      dividend: true,
      deposit: true,
      withdraw: true
    };

    this.types = ['equity', 'capital_gain_tax$capital_gain_refund', 'shipment$receipt', 'dividend', 'deposit', 'withdraw'];
  }

  componentDidMount() {
    this.loadTradeHistories();
  }

  handlePageChange = page => {
    this.loadTradeHistories(page);
  }

  handleSearch = (e) => {
    let typeValues = this.types.map(type => this.state[type]);
    let isUncheckAllTypes = typeValues.every((value) => {return value === false});
    if (isUncheckAllTypes && !this.state.checkAll) {
      alert('選択がされていません。');
    } else {
      this.loadTradeHistories();
    }
  }

  handleCheckType = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.checked;
    this.setState({[name]: value});
    this.setState({checkAll: false});
  }

  handleCheckAllTypes = (e) => {
    const target = e.target;
    const value = target.checked;
    this.setState({checkAll: value});

    this.types.forEach((type) => {
      this.setState({[type]: value});
    });
  }

  loadTradeHistories = (page=1) => {
    let params = {page: page};
    const { from, to, checkAll } = this.state;

    if (from) {
      params.from = moment(from).format('YYYYMMDD');
    }
    if (to) {
      params.to = moment(to).format('YYYYMMDD');
    }
    if (!checkAll) {
      let typeParams = [];
      this.types.forEach((type) => {
        if (this.state[type] === true) {
          typeParams.push(...type.split('$'));
        }
      });
      params.type = typeParams;
    }

    this.props.loadTradeHistoriesRequest(params);
  }

  render() {
    const { tradeHistories, currentPage, totalPages } = this.props;
    const { from, to, checkAll, equity, capital_gain_tax$capital_gain_refund, shipment$receipt, dividend, deposit, withdraw } = this.state;
    const showPagination = tradeHistories.length > 0;
    const pagination = (
      showPagination &&
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
                  <input type="checkbox" checked={checkAll} onChange={this.handleCheckAllTypes}/>すべて
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox" checked={equity} name="equity" onChange={this.handleCheckType}/>現物
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox" checked={capital_gain_tax$capital_gain_refund} name="capital_gain_tax$capital_gain_refund" onChange={this.handleCheckType}/>譲渡益税
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox" checked={shipment$receipt} name="shipment$receipt" onChange={this.handleCheckType}/>入出庫
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox" checked={dividend} name="dividend" onChange={this.handleCheckType}/>配当金
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox" checked={deposit} name="deposit" onChange={this.handleCheckType}/>入金
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox" checked={withdraw} name="withdraw" onChange={this.handleCheckType}/>出金
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

TradeHistory.childContextTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number
}

export default TradeHistory;