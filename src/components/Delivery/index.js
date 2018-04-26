import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DeliveryList from './DeliveryList';
import DeliverySummary from './DeliverySummary';
import DeliveryForm from './DeliveryForm';
import {
  removeElementFromArray,
  validateNumber
} from '../../utils';

class Delivery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfRow: 0,
      numberOfStock: 0,
      selectedStockCodes: [],
      totalCommissionAmount: 0,
      canNotSubmit: true,
      jasdec_code_7: '',
      jasdec_code_14: '',
      company_name: '',
      branch_name: '',
      branch_address: '',
      branch_code: '',
      account_id: '',
      isASelected: "p-labelblock is-selected",
      isBSelected: "p-labelblock",
      isDateEnable: "p-form-object_calender is_disbale",
      isDateControlDisable: false
    }
  }

  componentDidMount() {
    this.props.loadDeliveriesIndexRequest();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const params = {
      request_date: this.state.request_date,
      stock_codes: this.state.selectedStockCodes,
      jasdec_code: this.state.jasdec_code_7 + this.state.jasdec_code_14,
      company_name: this.state.company_name,
      branch_name: this.state.branch_name,
      branch_address: this.state.branch_address,
      branch_code: this.state.branch_code,
      account_id: this.state.account_id
    };

    this.props.submitdeliveriesRequest(params);
  }

  handleCheck = (stock_code, quantity, e) => {
    const target = e.target;

    var newNumberOfRow = this.state.numberOfRow;
    var newNumberOfStock = this.state.numberOfStock;
    var selectedStockCodes = this.state.selectedStockCodes;

    if (target.checked) {
      newNumberOfRow = newNumberOfRow + 1;
      newNumberOfStock = newNumberOfStock + quantity;
      selectedStockCodes.push(stock_code);
    } else {
      newNumberOfRow = newNumberOfRow - 1;
      newNumberOfStock = newNumberOfStock - quantity;
      removeElementFromArray(selectedStockCodes, stock_code);
    }

    var totalCommissionAmount = newNumberOfRow * 1080;
    var newCannotSubmit = false;

    if (newNumberOfRow === 0) {
      newCannotSubmit = true;
    }

    if (this.state.jasdec_code_7 === '') {
      newCannotSubmit = true;
    }

    if (this.state.jasdec_code_14 === '') {
      newCannotSubmit = true;
    }

    if (this.state.company_name === '') {
      newCannotSubmit = true;
    }

    if (this.state.branch_name === '') {
      newCannotSubmit = true;
    }

    if (this.state.branch_address === '') {
      newCannotSubmit = true;
    }

    if (this.state.branch_code === '') {
      newCannotSubmit = true;
    }

    if (validateNumber(this.state.account_id)) {
      newCannotSubmit = true;
    }


    this.setState({
      numberOfRow: newNumberOfRow,
      numberOfStock: newNumberOfStock,
      selectedStockCodes: selectedStockCodes,
      totalCommissionAmount: totalCommissionAmount,
      canNotSubmit: newCannotSubmit
    });
  }

  handleUserInput = (e) => {
    const target = e.target;

    if (target === undefined) {
      this.setState({
        requestDate: moment(e[0]).format('YYYYMMDD')
      });
    } else if (target.type === "radio") {
      var isDateEnable = "";
      var isASelected = "";
      var isBSelected = "";
      var isDateControlDisable = true;

      if (target.value === "ptn_B") {
        isDateEnable = "p-form-object_calender";
        isDateControlDisable = false;
        isASelected = "p-labelblock";
        isBSelected = "p-labelblock is-selected";
      } else{
        isDateEnable = "p-form-object_calender is_disbale";
        isDateControlDisable = true;
        isASelected = "p-labelblock is-selected";
        isBSelected = "p-labelblock";
      }

      this.setState({
        isDateEnable: isDateEnable,
        isDateControlDisable: isDateControlDisable,
        isASelected: isASelected,
        isBSelected: isBSelected
      });

    } else {
      var newCannotSubmit = false;

      if (this.state.numberOfRow === 0) {
        newCannotSubmit = true;
      }

      if (this.state.jasdec_code_7 === '') {
        newCannotSubmit = true;
      }

      if (this.state.jasdec_code_14 === '') {
        newCannotSubmit = true;
      }

      if (this.state.company_name === '') {
        newCannotSubmit = true;
      }

      if (this.state.branch_name === '') {
        newCannotSubmit = true;
      }

      if (this.state.branch_address === '') {
        newCannotSubmit = true;
      }

      if (this.state.branch_code === '') {
        newCannotSubmit = true;
      }

      if (validateNumber(this.state.account_id)) {
        newCannotSubmit = true;
      }

      const name = target.name
      const value = target.value;

      if (value === '') {
        newCannotSubmit = true;
      }

      this.setState({[name]: value, canNotSubmit: newCannotSubmit});
    }

  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">株式出庫 <b>口座出庫依頼書</b></div>
            <div className="p-section_header_tools">
              <ul>
                <li>
                  <Link to="/account/delivery/cancel">
                  <i className="icon-info-circled"></i>株式出庫依頼の確認へ（当日のみ）
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="delivery-caption">口座振替申請書（一般）　兼　特定口座内保管上場株式等移管依頼書</div>
          <div className="delivery-description">租税特別措置法施行令第25条の10の２第11項の規定に基づき、下記に示す振替元の特定口座に係る特定口座内保管上場株式等を株式等振替制度による口座振替により、振替先の特定口座に振替することを依頼いたします。</div>
          <DeliveryForm handleUserInput={this.handleUserInput} isDateEnable={this.state.isDateEnable} isDateControlDisable={this.state.isDateControlDisable} isASelected={this.state.isASelected} isBSelected={this.state.isBSelected} />
        </div>
        <div className="u-mt20p">
          <DeliveryList deliveries={this.props.deliveries} handleCheck={this.handleCheck} />
        </div>
        <div className="p-section_total u-mt20p">
          <DeliverySummary
            numberOfRow={this.state.numberOfRow}
            numberOfStock={this.state.numberOfStock}
            totalCommissionAmount={this.state.totalCommissionAmount}
          />
        </div>
        <div className="p-section_lead u-mt40p">
          <p>※移管1銘柄につき、1,080円（税込）の手数料をいただきます。</p>
          <p>※ご注文中、または受渡日を迎えていない銘柄は、手続きを行なうことはできません。</p>
          <p>※特定口座株式の場合、お預かりの全株式数を指定してください。一部株式数の移管はできません。</p>
          <p>※信用取引の保証金（代用有価証券）となっている銘柄の場合、保証金維持率の状況によっては移管できない場合があります。</p>
          <p>※移管先証券会社の都合で他社移管できない場合があります。（保管振替機構への加入者情報登録が行われていない場合など）</p>
          <p>※権利確定のための基準日が設定された場合、権利付最終日の15時より、移管手続を承ることができません。<br/>　ただし、決算期によっては、移管手続停止期間が、基準日の1週間前より行われる場合があります。<br/>　月の下旬に係る移管手続は承れない場合がありますのでご注意ください</p>
        </div>
        <div className="p-section_lead u-mt20p">
          <p><b>公開買付実施銘柄の他社移管についてのご注意事項</b></p>
          <p>※公開買付のための他社移管の場合、メッセージ/備考欄に「公開買付」とご入力ください。この場合手数料をいただきません。なお「公開買付」とご記入いただいた場合でも、当該銘柄が「公開買付」銘柄でない場合は、手数料を頂戴いたします。</p>
          <p>※公開買付期間最終日を含め5営業日遡った日の24時までにご依頼ください。4営業日以降は、通常の他社移管手続として取り扱います。</p>
        </div>
        <div className="u-mt20p u-center">
          <button className="c-button" onClick={this.handleSubmit} disabled={this.state.canNotSubmit}>出庫依頼する</button>
        </div>
      </div>
    );
  }
}

export default Delivery;
