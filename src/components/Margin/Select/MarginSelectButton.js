import React, { Component } from 'react'
import { BUTTON_TYPE } from '../../../constants/margin';
import { Link } from 'react-router-dom';

class MarginSelectButton extends Component {
  constructor(props) {
    super(props)
    this.handleNewMargin = this.handleNewMargin.bind(this)
  }

  handleNewMargin(accountType = '1') {
    const side = this.props.buttonType.split('_')[1]
    this.props.newMarginSwap(this.props.stockCode, side, accountType)
  }

  render() {
    const buttonType = this.props.buttonType
    const { ORDER_BUY, ORDER_SELL, SWAP_BUY, SWAP_SELL } = BUTTON_TYPE
    const { stockCode, isButtonDisabled } = this.props
    switch (buttonType) {
      case ORDER_SELL: {
        return <Link className="c-button c-button_buy" to={`/account/margin/${stockCode}/order`} disabled={isButtonDisabled}>返済買</Link>
      }
      case ORDER_BUY: {
        return <Link className="c-button c-button_sell" to={`/account/margin/${stockCode}/order`} disabled={isButtonDisabled}>返済売</Link>
      }
      case SWAP_BUY: {
        return <a className="c-button c-button_actual" onClick={() => this.handleNewMargin()} disabled={isButtonDisabled}>現引</a>
      }
      case SWAP_SELL: {
        return (
          <div>
            {
              this.props.isGeneral ?
              <a
                className="c-button c-button_actual"
                disabled={isButtonDisabled}
                onClick={() => this.handleNewMargin('0')}
              >
                一般預りから現渡
              </a> : null
            }
            <a
              className="c-button c-button_actual"
              disabled={isButtonDisabled}
              onClick={() => this.handleNewMargin('1')}
            >
              特定預りから現渡
            </a>
          </div>
        )
      }
      default:
        return null;
    }
  }
}

export default MarginSelectButton;