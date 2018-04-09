import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PhysicalOrderConfirm extends Component {
  constructor(props) {
    super(props);

    this.stockCode = this.props.match.params.code;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.completeOrderRequest(this.stockCode);
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">現物売却 <b>取引確認</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>内容をご確認いただき「発注する」を押すとご注文が確定します。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="c-table-responsive">
            <div className="c-table_inputs">
              <table>
                <tbody>
                  <tr>
                    <th>銘柄コード</th>
                    <td>6501/日立</td>
                  </tr>
                  <tr>
                    <th>市場</th>
                    <td>当社最良執行市場</td>
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
                    <th>執行条件</th>
                    <td>指値800円</td>
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
          <Link className="c-button c-button_cancel" to={`/account/physical/${this.stockCode}/order`}>入力へ戻る</Link>
          <a className="c-button" onClick={this.handleSubmit}>発注する</a>
        </div>
      </div>
    );
  }
}

export default PhysicalOrderConfirm;