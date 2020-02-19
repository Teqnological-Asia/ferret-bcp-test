import React, {Component, Fragment} from "react";
import { formatDate } from "../../../utils";
import PDFTable from './PDFTable'
class TradeLendingHistoryRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  formatTradeType = tradeType => {
    const tradeTypes = {
      OPEN: "貸出",
      CLOSE: "返却"
    };

    return tradeTypes[tradeType];
  };
  openModal = () => {
    this.setState({
      isOpen: true
    });
  };
  closeModal = (status) =>{
    this.setState({
      isOpen: status
    })
  }
  render(){
    const {tradeLendingHistory} = this.props;
    const {isOpen} = this.state;
    return (
      <Fragment>
        {isOpen ? <PDFTable id="pdf-table" tradeLendingHistory={tradeLendingHistory} getCloseStatus={this.closeModal}/>: null}
      <tr>
        <td className="c-l">{formatDate(tradeLendingHistory.tradeDate)}</td>
        <td className="c-l">{formatDate(tradeLendingHistory.settlementDate)}</td>
        <td className="c-l">{this.formatTradeType(tradeLendingHistory.lendingTradeType)}</td>
        <td className="c-l">{tradeLendingHistory.stock_name}</td>
        <td className="c-l">{tradeLendingHistory.quantity}</td>
        <td className="c-l">
          <a href={null} target="blank" onClick={() => this.openModal()}>{tradeLendingHistory.lendingTradeType === "OPEN" ? "印刷" : null}</a>
        </td>
      </tr>
      </Fragment>
    );
  }
  
};

export default TradeLendingHistoryRow;
