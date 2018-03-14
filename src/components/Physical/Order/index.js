import React, { Component } from 'react';

class PhysicalOrder extends Component {
  render() {
    return (
      <div className="l-contents">
        <div className="l-contents_head">
          <div className="p-pageTitle">
            <div className="p-pageTitle_head">
              <div className="p-pageTitle_title">障害時取引メニュー<span className="p-pageTitle_separate"></span>現物株式売却</div>
            </div>
            <div className="p-pageTitle_body">
              <div className="p-nav_sub">
                <ul>
                  <li className="is_current"><a href="3-1.html">現物株式売却</a></li>
                  <li><a href="3-2.html">信用決済</a></li>
                  <li><a href="3-3.html">注文照会</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="l-contents_body">
          <div className="l-contents_body_inner">
            <div className="u-mt40p">
              <div className="p-section_header">
                <div className="p-section_header_title">現物売却 <b>取引入力</b></div>
              </div>
            </div>
            <div className="u-mt20p">
              <div className="p-section_lead">
                <p>ご注文を入力し確認画面へお進みください。</p>
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
                              <input type="radio" name="dummy_radio" value="ptn_A" checked/><span>成行</span>
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
            <div className="u-mt20p"><a className="c-button c-button_cancel" href="3-1.html">一覧へ戻る</a><a className="c-button" href="3-1-2.html">確認画面へ</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhysicalOrder;