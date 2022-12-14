import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency, validateIntegerNumber, validateNumber } from '../../../utils';
import { transactionByButtonType } from '../common';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    const { quantity, orderType, price } = props.orderFormValues || {};

    this.state = {
      quantity: quantity || '',
      orderType: orderType || 'Market',
      price: price || ''
    }

    this.validateNumberError = '数値を入力してください';
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.orderFormValues) {
      this.setState({
        quantity: nextProps.orderFormValues.quantity
      })
    }
  }

  handleTextChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value});
  }

  handleRadioChange = (e) => {
    this.setState({orderType: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { quantity, orderType, price } = this.state;
    const side = this.props.buttonType.split('_')[1];

    if (!quantity || !validateIntegerNumber(quantity)) {
      alert(this.validateNumberError);
      return;
    }

    if (orderType === 'Limit' && (!price || !validateNumber(price))) {
      alert(this.validateNumberError);
      return;
    }
    this.props.newMarginOrder(this.props.stockCode, side, this.state);
  }

  validateMaxNumChar = (e) => {
    if (this.state.quantity.length + 1 > 9) {
      e.preventDefault();
    }

    if (this.state.price.length + 1 > 9) {
      e.preventDefault();
    }
  }

  handleChangePrice = (e, type) => {
    e.preventDefault();
    const price = this.state.price;
    const stockDetail = this.props.stockDetail;
    const priceRangeLower = parseFloat(stockDetail.price_range_lower);
    const priceRangeUpper = parseFloat(stockDetail.price_range_upper);
    const priceRangeRule = stockDetail.price_range_rule;
    const bid = parseFloat(stockDetail.bid);

    if (price === '') {
      if (bid < priceRangeLower) {
        this.setState({price: priceRangeLower});
      } else if (bid > priceRangeUpper) {
        this.setState({price: priceRangeUpper});
      } else {
        this.setState({price: bid});
      }
      return;
    }

    if (!validateNumber(price)) {
      alert(this.validateNumberError);
      return;
    }

    let parsedPrice = parseFloat(price);

    if (parsedPrice < priceRangeLower) {
      this.setState({price: priceRangeLower});
      return;
    }

    if (parsedPrice > priceRangeUpper) {
      this.setState({price: priceRangeUpper});
      return;
    }

    let rule = {};
    for (let i = 0; i < priceRangeRule.length; i++) {
      let item = priceRangeRule[i];
      let nextItem = priceRangeRule[i + 1];

      if (item['price'] !== null && parsedPrice === parseFloat(item['price']) && type === 'down') {
        rule = item;
        break;
      }
      if (item['price'] !== null && parsedPrice < item['price']) {
        rule = item;
        break;
      }
      if (nextItem === undefined) {
        rule = item;
        break;
      }
    }

    const step = parseFloat(rule['tick']);
    var priceMin = parseFloat(rule['price']);

    if (isNaN(priceMin)) {
      priceMin = parseFloat(priceRangeRule[priceRangeRule.length - 2].price);
    }

    if (type === 'up') {
      if (step >= 1) {
        parsedPrice = Math.floor(((parsedPrice - priceMin) * 10) / (step * 10)) * step + step + priceMin;
      } else{
        parsedPrice = (((parsedPrice - priceMin) * 10) / (step * 10)) * step + step + priceMin;
        parsedPrice = parsedPrice.toFixed(1);
      }

      if (parsedPrice > priceRangeUpper) {
        parsedPrice = priceRangeUpper;
      }
    } else {
      if (step >= 1) {
        parsedPrice = Math.ceil(((parsedPrice - priceMin) * 10) / (step * 10)) * step + priceMin - step;
      } else {
        parsedPrice = (((parsedPrice - priceMin) * 10) / (step * 10)) * step + priceMin - step;
        parsedPrice = parsedPrice.toFixed(1);
      }

      if (parsedPrice < priceRangeLower) {
        parsedPrice = priceRangeLower;
      }
    }

    this.setState({price: parsedPrice});
  }

  formattedQuantities = physical => (
    physical && physical.shortable_quantity ? formatCurrency(physical.shortable_quantity) : '-'
  )

  render() {
    const { stockDetail, physicalDetail, buttonType } = this.props;
    const { quantity, orderType, price } = this.state;

    if (stockDetail === null || physicalDetail === null) return null;
    const isMarketType = orderType === 'Market';
    const transaction = transactionByButtonType(buttonType)

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="u-mt20p">
          <div className="c-table-responsive">
            <div className="c-table_inputs">
              <table>
                <tbody>
                  <tr>
                    <th>銘柄コード</th>
                    <td>{stockDetail.code}/{stockDetail.name}</td>
                  </tr>
                  <tr>
                    <th>取引</th>
                    <td>{transaction}</td>
                  </tr>
                  <tr>
                    <th>取引株数</th>
                    <td>{this.state.quantity}株</td>
                  </tr>
                  <tr>
                    <th>執行条件・単価</th>
                    <td>
                      <div className={"p-labelblock " + (isMarketType ? 'is-selected': '')} id="ptn_block_A">
                        <label>
                          <input type="radio" name="orderType" value="Market" checked={orderType === 'Market'} onChange={this.handleRadioChange} /><span>成行</span>
                        </label>
                      </div>
                      <div className={"p-labelblock " + (!isMarketType ? 'is-selected': '')} id="ptn_block_B">
                        <label>
                          <input type="radio" name="orderType" value="Limit" checked={orderType === 'Limit'} onChange={this.handleRadioChange} /><span>指値</span>
                        </label>
                        <div className="u-row">
                          <div className="u-col_50 u-col_100_sp">
                            <div className={"p-input_updown u-mt10p "+ (isMarketType ? 'is_disbale' : '')} id="dummy_parent">
                              <div className="p-input">
                                <input name="price" className="u-right" id="dummy_child" type="text" placeholder="数値を入力してください" disabled={isMarketType} onChange={this.handleTextChange} value={price} onKeyPress={this.validateMaxNumChar} />
                              </div><span className="p-unit">円</span>
                              <button className="p-input_control p-input_up" onClick={(e) => this.handleChangePrice(e, 'up')}>UP</button>
                              <hr/>
                              <button className="p-input_control p-input_down" onClick={(e) => this.handleChangePrice(e, 'down')}>DOWN</button>
                            </div>
                          </div>

                        </div>

                        <span className="p-range">制限値幅：{stockDetail.price_range_lower}～{stockDetail.price_range_upper}円
                        </span>

                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>取引期限</th>
                    <td>当日限り</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <Link className="c-button c-button_cancel" to="/account/margin">個別選択へ戻る</Link>
          <input className="c-button" type="submit" value="確認画面へ" disabled={!quantity || (orderType === 'Limit' && !price)} />
        </div>
      </form>
    );
  }
}

export default OrderForm;
