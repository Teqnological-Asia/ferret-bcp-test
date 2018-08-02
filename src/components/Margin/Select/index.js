import React, { Component } from 'react';
import MarginSelectTable from './MarginSelectTable';
import { handleMinMaxCondition } from '../../../utils';

class MarginSelect extends Component {
  constructor(props) {
    super(props);
    this.stockCode = this.props.match.params.code;
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this)
  }

  componentDidMount() {
    this.props.loadStockMarginRequest(this.stockCode)
    this.props.loadStockDetailRequest(this.stockCode)
  }

  handleChangeQuantity(position, isUp, value = 0) {
    const { stock } = this.props
    const tradeUnit = stock ? parseInt(stock.trade_unit, 10) : 1;
    let tradeQuantity = parseInt(position.trade_quantity, 10)
    if (isUp === null) {
      tradeQuantity = isNaN(parseInt(value, 10)) ? tradeQuantity : parseInt(value, 10)
    } else if (isUp) {
      tradeQuantity = Math.floor(tradeQuantity / tradeUnit) * tradeUnit + tradeUnit;
    } else {
      tradeQuantity = Math.ceil(tradeQuantity / tradeUnit) * tradeUnit - tradeUnit;
    }

    tradeQuantity = handleMinMaxCondition(tradeQuantity, 0, position.max_quantity);
    const newPosition = {
      ...position,
      trade_quantity: tradeQuantity
    }
    this.props.changeStockMarginPosition(newPosition)
  }

  render() {
    const positions = this.props.stockMargin ? this.props.stockMargin.positions : []
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">信用決済 <b>個別選択</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <MarginSelectTable
            positions={positions}
            handleChangeQuantity={this.handleChangeQuantity}
          />
          <div className="u-mt20p">
            <p className="p-buttons_msg">上記の建玉をまとめて決済します</p>
            <a className="c-button c-button_actual" href="3-2-0-1.html">現引</a>
            <a className="c-button c-button_sell" href="3-2-1.html">返済売</a>
            <a className="c-button c-button_buy" href="3-2-1.html">返済買</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MarginSelect;