import React, { Component } from "react";
import moment from "moment";
import LendingBalanceList from "./LendingBalanceList";

class TradeLendingBalance extends Component {
  constructor(props) {
    super(props);
    let fromDate = new Date();
    fromDate.setDate(fromDate.getDate());
    this.state = {
      date: moment(fromDate).format("YYYY年MM月DD日")
    };
  }
  componentDidMount() {
    this.props.loadTradeLendingBalanceRequest();
  }
  formatDate = (date) =>{
    return moment(date).format("YYYY年MM月DD日")
  }
  render() {
    const { tradeLendingBalance, attributes } = this.props;
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">貸株状況</div>
            <p className="p-section-description">{this.formatDate(attributes.date)}引け時点株式一覧</p>
            <p className="p-section_header_aside">
              ※貸株料は受渡日より計算します。1日～月末分をまとめて翌月10日に入金させて頂きます。（10日が非営業日である場合はその直後の営業日に入金されます）
            </p>
          </div>
        </div>
        <div className="u-mt40p">
          <LendingBalanceList tradeLendingBalance={tradeLendingBalance} />
        </div>
      </div>
    );
  }
}
export default TradeLendingBalance;
