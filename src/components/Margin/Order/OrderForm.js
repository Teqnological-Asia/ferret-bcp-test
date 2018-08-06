import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency, validateIntegerNumber, validateNumber } from '../../../utils';

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

    if (!quantity || !validateIntegerNumber(quantity)) {
      alert(this.validateNumberError);
      return;
    }

    if (orderType === 'Limit' && (!price || !validateNumber(price))) {
      alert(this.validateNumberError);
      return;
    }

    this.props.saveOrderFormRequest(this.props.stockCode, this.state);
  }

  setShortableQuantity = () => {
    this.setState({quantity: this.getDefaultQuantity(this.props.physicalDetail)});
  }

  getDefaultQuantity = (physicalDetail) => {
    if (physicalDetail === null) return '';

    const tradeUnit = parseInt(physicalDetail.trade_unit, 10);
    const shortableQuantity = parseInt(physicalDetail.shortable_quantity, 10);
    return Math.floor(shortableQuantity / tradeUnit) * tradeUnit;
  }

  handleChangeQuantity = (e, type) => {
    e.preventDefault();
    const quantity = this.state.quantity;
    const { physicalDetail } = this.props;
    const tradeUnit = parseInt(physicalDetail.trade_unit, 10);
    // const defaultQuantity = this.getDefaultQuantity(physicalDetail);

    if (quantity === '') {
      this.setState({quantity: tradeUnit});
      return;
    }

    if (!validateIntegerNumber(quantity)) {
      alert(this.validateNumberError);
      return;
    }

    let parsedQuantity = parseInt(quantity, 10);

    if (parsedQuantity < tradeUnit) {
      this.setState({quantity: tradeUnit});
      return;
    }

    // if (parsedQuantity > defaultQuantity) {
    //   this.setState({quantity: defaultQuantity});
    //   return;
    // }

    if (type === 'up') {
      parsedQuantity = Math.floor(parsedQuantity / tradeUnit) * tradeUnit + tradeUnit;
      // if (parsedQuantity > defaultQuantity) {
      //   parsedQuantity = defaultQuantity;
      // }
    } else {
      parsedQuantity = Math.ceil(parsedQuantity / tradeUnit) * tradeUnit - tradeUnit;
      if (parsedQuantity < tradeUnit) {
        parsedQuantity = tradeUnit;
      }
    }

    this.setState({quantity: parsedQuantity});
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
    const { stockDetail, physicalDetail } = this.props;
    const { quantity, orderType, price } = this.state;

    if (stockDetail === null || physicalDetail === null) return null;
    const isMarketType = orderType === 'Market';

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
                    <td>現物売却</td>
                  </tr>
                  <tr>
                    <th>取引株数</th>
                    <td>1000株</td>
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
          <Link className="c-button c-button_cancel" to="/account/physical">一覧へ戻る</Link>
          <input className="c-button" type="submit" value="確認画面へ" disabled={!quantity || (orderType === 'Limit' && !price)} />
        </div>
      </form>
    );
  }
}

export default OrderForm;
