import React, { Component } from 'react';

class MarginOrder extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">信用返済（反対売買） <b>注文入力</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>ご注文を入力し確認画面へお進みください。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="c-table_inputs">
            <table>
              <tbody>
                <tr>
                  <th>銘柄コード</th>
                  <td>6501/日立</td>
                </tr>
                <tr>
                  <th>取引</th>
                  <td>信用返済売</td>
                </tr>
                <tr>
                  <th>取引株数</th>
                  <td>1000株</td>
                </tr>
                <tr>
                  <th>執行条件</th>
                  <td>
                    <div className="p-labelblock is-selected" id="ptn_block_A">
                      <label>
                        <input type="radio" name="dummy_radio" value="ptn_A" checked/><span>成行</span>
                      </label>
                    </div>
                    <div className="p-labelblock" id="ptn_block_B">
                      <label>
                        <input id="hoge" type="radio" name="dummy_radio" value="ptn_B"/><span>指値</span>
                      </label>
                      <div className="u-row">
                        <div className="u-col_50 u-col_100_sp">
                          <div className="p-input_updown is_disbale u-mt10p" id="hoge_parent">
                            <div className="p-input">
                              <input className="u-right" id="hoge_child" type="text" placeholder="数値を入力してください" disabled/>
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
        <div className="u-mt20p"><a className="c-button c-button_cancel" href="3-2-0.html">個別選択へ戻る</a><a className="c-button" href="3-2-2.html">確認画面へ</a></div>
      </div>
    )
  }
}

export default MarginOrder;