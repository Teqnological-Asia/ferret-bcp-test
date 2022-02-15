import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import moment from 'moment';
import PropTypes from 'prop-types';
import Pagination from '../../Authenticated/Pagination';
import TradeCashHistoryList from './TradeCashHistoryList';

class TradeCashHistory extends Component {
  getChildContext() {
    const { currentPage } = this.props;
    return { currentPage };
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
      CAPITAL_GAIN_TAX: true,
      DIVIDEND: true,
      cash_transactions: true
    };

    this.types = [
       'CAPITAL_GAIN_TAX',
       'DIVIDEND',
       'cash_transactions'
    ];
  }

  componentDidMount() {
    this.loadTradeCashHistories();
  }

  handlePageChange = page => {
    this.loadTradeCashHistories(page);
  }

  handleSearch = (e) => {
    let typeValues = this.types.map(type => this.state[type]);
    let isUncheckAllTypes = typeValues.every((value) => {return value === false});
    if (isUncheckAllTypes && !this.state.checkAll) {
      alert('選択がされていません。');
    } else {
      this.loadTradeCashHistories();
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

  loadTradeCashHistories = (page=1) => {
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
          if (type === 'margin') {
            typeParams.push('margin', 'DIVIDEND_adjustment')
          } else {
            typeParams.push(...type.split('$'));
          }
        }
      });
      params.type = typeParams;
    }
    this.props.loadTradeCashHistoriesRequest(params);
  }

  render() {
    const { tradeCashHistories, currentPage } = this.props;
    const { from, to, checkAll, CAPITAL_GAIN_TAX, DIVIDEND, cash_transactions } = this.state;
    // const showPagination = tradeCashHistories.length > 0;
    // const pagination = (
    //   showPagination &&
    //     <Pagination
    //       boundaryPagesRange={0}
    //       siblingPagesRange={2}
    //       currentPage={currentPage}
    //       totalPages={totalPages}
    //       onChange={this.handlePageChange}
    //     />
    // );

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
                  <input type="checkbox" checked={CAPITAL_GAIN_TAX} name="CAPITAL_GAIN_TAX" onChange={this.handleCheckType}/>譲渡益税
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox" checked={DIVIDEND} name="DIVIDEND" onChange={this.handleCheckType}/>配当金
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox" checked={cash_transactions} name="cash_transactions" onChange={this.handleCheckType}/>入出金
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
          <TradeCashHistoryList tradeCashHistories={tradeCashHistories} />
          {/*{pagination}*/}
        </div>
      </div>
    );
  }
}

TradeCashHistory.childContextTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number
}

export default TradeCashHistory;