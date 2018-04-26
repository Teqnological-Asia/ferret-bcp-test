import React from 'react';
import Flatpickr from 'react-flatpickr';

const DeliveryForm = ({handleUserInput, isDateEnable, isASelected, isBSelected}) => {
  return (
    <table className="c-table_d">
      <tbody>
        <tr>
          <th className="c-w25">振替指示日</th>
          <td className="c-l">
            <div className={isASelected} id="ptn_block_A">
              <label>
                <input type="radio" name="dummy_radio" value="ptn_A" defaultChecked onChange={handleUserInput.bind(this)} />
                <span>可能な限り早い日</span>
              </label>
            </div>
            <div className={isBSelected} id="ptn_block_B">
              <label>
                <input id="hoge" type="radio" name="dummy_radio" value="ptn_B"
                  onChange={handleUserInput.bind(this)}/>
                <span>日にちを指定</span>
              </label>
              <div className="u-mt10p">
                <div className={isDateEnable} id="hoge_parent"><i className="icon-calendar-empty"></i>
                  <Flatpickr value="" onChange={handleUserInput.bind(this)}/>
                </div>
              </div><span className="p-subtext">※5営業日目以降の日にちをご入力ください（指定日通りに振替できないことがあります）</span>
            </div>
          </td>
        </tr>
        <tr>
          <th>移管先口座管理機関コード</th>
          <td className="c-l">
            <div className="u-row">
              <div className="u-col_25 u-col_50_sp">
                <input className="p-form-object dummy_text" name="jasdec_code_7" type="text" maxLength="7"
                  onChange={handleUserInput.bind(this)}/>
              </div>
              <div className="u-col_25 u-col_100_sp">
                <input className="p-form-object dummy_text" name="jasdec_code_14" type="text" maxLength="14"
                  onChange={handleUserInput.bind(this)}/>
              </div>
            </div>
            <p>※機構加入者コード7桁+14桁</p>
          </td>
        </tr>
        <tr>
          <th>口座管理機関名</th>
          <td className="c-l">
            {/*
            <a href="">金融機関名を取得する</a>
            */}
            <input className="p-form-object dummy_text" name="company_name" type="text" onChange={handleUserInput.bind(this)}/>
          </td>
        </tr>
        <tr>
          <th>部支店名</th>
          <td className="c-l">
            <input className="p-form-object dummy_text" name="branch_name" type="text" onChange={handleUserInput.bind(this)}/>
          </td>
        </tr>
        <tr>
          <th>部支店の所在地</th>
          <td className="c-l">
            <input className="p-form-object dummy_text" name="branch_address" type="text" onChange={handleUserInput.bind(this)}/>
          </td>
        </tr>
        <tr>
          <th>部支店コード</th>
          <td className="c-l">
            <div className="u-row">
              <div className="u-col_50 u-col_100_sp">
                <input className="p-form-object dummy_text" name="branch_code" type="text" onChange={handleUserInput.bind(this)}/>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th>お客様口座番号</th>
          <td className="c-l">
            <div className="u-row">
              <div className="u-col_50 u-col_100_sp">
                <input className="p-form-object dummy_text" name="account_id" type="text" onChange={handleUserInput.bind(this)} />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th>名義人</th>
          <td className="c-l">依頼人と同じ</td>
        </tr>
      </tbody>
    </table>
  );

}

export default DeliveryForm;
