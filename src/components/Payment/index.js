import React, { Component } from 'react';
import { getToken } from '../../utils';
import DepositInfo from './DepositInfo';
import WithdrawalForm from './WithdrawalForm';
import { Link } from 'react-router-dom';

class Payment extends Component {
  componentDidMount() {
    this.props.loadCashTransferRequest();
    this.props.loadCashWithdrawalRequest();
  }

  render() {
    const { cashTransfer, cashWithdrawal, saveWithdrawalAmountRequest } = this.props;
    const callbackUrl = `${process.env.REACT_APP_WB5_WEB_INTEGRATION}/payment?callback=${encodeURI(window.location.href)}/history&token=${getToken()}`;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">
              オンライン即時入金
            </div>
            <div className="p-section_header_aside">

            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <a className="c-button" href={callbackUrl}>オンライン即時入金へ</a>
        </div>
        <div className="u-mt30p">
          <div className="p-section_lead">
            <p>
            ※オンライン即時入金の際にポップアップブロックの解除が必要です。（解除方法は<a href="https://help.smartplus-sec.com/s/article/popup" target="_blank" rel="noopener noreferrer">こちら</a>）
            </p>
            <p>
              ※必ずご本人名義の口座でお手続きください。
            </p>
            <p>
              ※『提携金融機関におけるお手続きの最後で、「加盟店に通知」「加盟店画面に戻る」「加盟店のサイトへ戻る」「ショップに戻る」等のクリックを必ずおこなってください。入金が正常に処理されない可能性がございます。オンライン即時入金に関する詳細は
              <a href="https://smartplus-sec.com/service/procedure/payment/online/" target="_blank" rel="noopener noreferrer">こちら</a>
              をご確認ください。
            </p>
          </div>
        </div>
        <DepositInfo cashTransfer={cashTransfer} />
        <WithdrawalForm cashWithdrawal={cashWithdrawal} saveWithdrawalAmountRequest={saveWithdrawalAmountRequest} />
        <div className="u-mt30p">
          <div className="p-section_lead">
            <p>
              ご出金に関する詳細は<Link to="https://smartplus-sec.com/service/procedure/transfer/" target="_blank">こちら</Link>をご確認ください。
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
