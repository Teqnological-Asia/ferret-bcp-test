import React, { Component } from 'react';

class MarginSelect extends Component {
  constructor(props) {
    super(props);
    this.stockCode = this.props.match.params.code;
  }

  componentDidMount() {
    this.props.loadStockMarginRequest(this.stockCode)
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">信用決済 <b>個別選択</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <table className="c-table_list">
            <thead>
              <tr>
                <th className="c-l">銘柄コード</th>
                <th className="c-l">銘柄</th>
                <th className="c-l">区分</th>
                <th className="c-l">建日</th>
                <th>数量</th>
                <th>平均建単価</th>
                <th>評価損益</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="c-l" data-name="銘柄コード">6501</td>
                <td className="c-l" data-name="銘柄">日立/買建/一般信用</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="建日">2018/1/4</td>
                <td className="c-display_label_sp" data-name="数量">
                  <div className="p-input_stockupdown">
                    <div className="p-input">
                      <input className="u-right" id="hoge_child" type="text" value="500" placeholder="数値を入力してください"/>
                    </div><span className="p-unit">株</span>
                    <button className="p-input_control p-input_up" value="">UP</button>
                    <hr/>
                    <button className="p-input_control p-input_down" value="">DOWN</button>
                  </div>
                </td>
                <td data-name="平均建単価">750円</td>
                <td data-name="評価損益">-100</td>
              </tr>
              <tr>
                <td className="c-l" data-name="銘柄コード">6501</td>
                <td className="c-l" data-name="銘柄">日立/買建/一般信用</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="建日">2018/1/5</td>
                <td className="c-display_label_sp" data-name="数量">
                  <div className="p-input_stockupdown">
                    <div className="p-input">
                      <input className="u-right" id="hoge_child" type="text" value="200" placeholder="数値を入力してください"/>
                    </div><span className="p-unit">株</span>
                    <button className="p-input_control p-input_up" value="">UP</button>
                    <hr/>
                    <button className="p-input_control p-input_down" value="">DOWN</button>
                  </div>
                </td>
                <td data-name="平均建単価">740円</td>
                <td data-name="評価損益">-200</td>
              </tr>
              <tr className="c-disable">
                <td className="c-l" data-name="銘柄コード">6501</td>
                <td className="c-l" data-name="銘柄">日立/買建/一般信用</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="建日">2018/1/7</td>
                <td className="c-display_label_sp" data-name="数量">
                  <div className="p-input_stockupdown is_disbale">
                    <div className="p-input">
                      <input className="u-right" id="hoge_child" type="text" value="100" placeholder="数値を入力してください" disabled/>
                    </div><span className="p-unit">株</span>
                    <button className="p-input_control p-input_up" value="">UP</button>
                    <hr/>
                    <button className="p-input_control p-input_down" value="">DOWN</button>
                  </div>
                </td>
                <td data-name="平均建単価">720円</td>
                <td data-name="評価損益">-400</td>
              </tr>
              <tr>
                <td className="c-l" data-name="銘柄コード">6501</td>
                <td className="c-l" data-name="銘柄">日立/買建/一般信用</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="建日">2018/1/6</td>
                <td className="c-display_label_sp" data-name="数量">
                  <div className="p-input_stockupdown">
                    <div className="p-input">
                      <input className="u-right" id="hoge_child" type="text" value="200" placeholder="数値を入力してください"/>
                    </div><span className="p-unit">株</span>
                    <button className="p-input_control p-input_up" value="">UP</button>
                    <hr/>
                    <button className="p-input_control p-input_down" value="">DOWN</button>
                  </div>
                </td>
                <td data-name="平均建単価">730円</td>
                <td data-name="評価損益">-300</td>
              </tr>
            </tbody>
          </table>
          <div className="u-mt20p">
            <p className="p-buttons_msg">上記の建玉をまとめて決済します</p><a className="c-button c-button_actual" href="3-2-0-1.html">現引</a>
            <a className="c-button c-button_sell" href="3-2-1.html">返済売</a>
            <a className="c-button c-button_buy" href="3-2-1.html">返済買</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MarginSelect;