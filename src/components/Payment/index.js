import React, { Component } from 'react';
import { getToken } from '../../utils';
import DepositInfo from './DepositInfo';
import WithdrawalForm from './WithdrawalForm';

class Payment extends Component {
  componentDidMount() {
    this.props.loadCashTransferRequest();
    this.props.loadCashWithdrawalRequest();
  }

  render() {
    const { cashTransfer, cashWithdrawal, saveWithdrawalAmountRequest } = this.props;
    const callbackUrl = `https://wb5-web.ikinari-steak.net/payment?callback=https://smartplus-sec.com&token=${getToken()}`;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">入金 <b>（オンライン即時入金）</b></div>
            <div className="p-section_header_aside">
              <p>※五十音順</p>
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <a className="c-button" href={callbackUrl}>オンライン即時入金へ</a>
        </div>
        <div className="u-mt30p">
          <div className="p-section_lead">
            <p>※『提携金融機関における手続きの最後で、「加盟店に通知」「加盟店画面に戻る」「加盟店のサイトへ戻る」「ショップに戻る」等のクリックを必ずおこなってください。先の文言をクリックしなかった場合即時入金が正常に処理されません。（手続きが完了しなかった場合、入金反映が入金当日の夕刻以降、もしくは入金されない場合があります。十分ご注意ください。)』</p>
            <p>※必ずご本人名義の口座からのお手続きください。</p>
            <p>※振込手数料は弊社負担とさせていただきます。</p>
          </div>
        </div>
        <DepositInfo cashTransfer={cashTransfer} />
        <WithdrawalForm cashWithdrawal={cashWithdrawal} saveWithdrawalAmountRequest={saveWithdrawalAmountRequest} />
      </div>
    );
  }
}

export default Payment;