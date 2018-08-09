import React, { Component } from 'react';
import MarginSelectTable from './MarginSelectTable';
import { handleMinMaxCondition } from '../../../utils';
import MarginSelectButton from './MarginSelectButton';
import { sumMarginReducer } from '../../../utils'

class MarginSelect extends Component {
  constructor(props) {
    super(props);
    this.stockCode = this.props.match.params.code;
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this)
    this.state = {
      isButtonDisabled: true
    }
  }

  componentDidMount() {
    if (this.props.buttonType === null) {
      this.props.history.push('/account/margin')
    }

    const side = this.props.buttonType.split('_')[1]
    this.props.loadStockMarginRequest(this.stockCode, side)
    this.props.loadStockDetailRequest(this.stockCode)
    this.props.loadAccountType(this.stockCode)
  }

  componentWillReceiveProps(nextProps) {
    const { stockMargin } = nextProps
    if (stockMargin) {
      const sumQuantity = stockMargin.positions.reduce(sumMarginReducer, 0)
      if (this.state.isButtonDisabled && sumQuantity !== 0) {
        this.setState({
          isButtonDisabled: false
        })
      } else if (this.state.isButtonDisabled === false && sumQuantity === 0) {
        this.setState({
          isButtonDisabled: true
        })
      }
    }
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
            <MarginSelectButton
              isButtonDisabled={this.state.isButtonDisabled}
              stockCode={this.stockCode}
              buttonType={this.props.buttonType}
              newMarginSwap={this.props.newMarginSwap}
              isGeneral={this.props.isGeneral}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MarginSelect;