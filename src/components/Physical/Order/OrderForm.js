import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OrderForm extends Component {
  render() {
    const { stockDetail, physicalDetail } = this.props;

    if (stockDetail === null || physicalDetail === null) return null;

    return (
      <form>
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
                    <th>取引</th>
                    <td>現物売却</td>
                  </tr>
                  <tr>
                    <th>取引株数</th>
                    <td>
                      <div className="u-row">
                        <div className="u-col_50 u-col_100_sp">
                          <div className="p-input_updown">
                            <div className="p-input">
                              <input className="u-right" type="text" placeholder="数値を入力してください"/>
                            </div><span className="p-unit">株</span>
                            <button className="p-input_control p-input_up" value="">UP</button>
                            <hr/>
                            <button className="p-input_control p-input_down" value="">DOWN</button>
                          </div>
                        </div>
                        <div className="u-col_50 u-col_100_sp u-mt10p_sp"><a className="c-button c-button_small" href="">全数量セット（1000株）</a></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>執行条件</th>
                    <td>
                      <div className="p-labelblock is-selected" id="ptn_block_A">
                        <label>
                          <input type="radio" name="dummy_radio" value="ptn_A" defaultChecked/><span>成行</span>
                        </label>
                      </div>
                      <div className="p-labelblock" id="ptn_block_B">
                        <label>
                          <input type="radio" name="dummy_radio" value="ptn_B"/><span>指値</span>
                        </label>
                        <div className="u-row">
                          <div className="u-col_50 u-col_100_sp">
                            <div className="p-input_updown is_disbale u-mt10p" id="dummy_parent">
                              <div className="p-input">
                                <input className="u-right" id="dummy_child" type="text" placeholder="数値を入力してください" disabled/>
                              </div><span className="p-unit">円</span>
                              <button className="p-input_control p-input_up" value="">UP</button>
                              <hr/>
                              <button className="p-input_control p-input_down" value="">DOWN</button>
                            </div>
                          </div>
                        </div><span className="p-range">制限値幅：650～850円</span>
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
          <a className="c-button" href="3-1-2.html">確認画面へ</a>
        </div>
      </form>
    );
  }
}

export default OrderForm;