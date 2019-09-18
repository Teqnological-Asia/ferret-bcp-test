import * as React from 'react';
import streamLogo from "../../assets/images/logo_stream.svg";
import ikebukuroLogo from "../../assets/images/logo_hr.svg";
import shiodomeLogo from "../../assets/images/logo_shiodome.svg";

const getAccountNameMapping = (rpId) => {
  const accountNameMapping = {
    'smartplus': 'スマートプラス',
    'capolong': '池袋',
    'shiodome': '汐留',
  };
  return accountNameMapping[rpId];
};

const getAccountLogoMapping = (rpId) => {
  const accountLogoMapping = {
    'smartplus': streamLogo,
    'capolong': ikebukuroLogo,
    'shiodome': shiodomeLogo,
  };
  return accountLogoMapping[rpId];
};

class UserAccount extends React.Component {
  render() {
    const {accounts, currentAccount} = this.props;

    return (
      <div className="p-section_user_apps u-mt20p">
        <p>
          いつも{currentAccount && getAccountNameMapping(currentAccount.rpId)}をご利用いただきありがとうございます。<br/>
          当Webサイトからはお手続きや取引履歴、スマホがご利用いただけない際の緊急時の売却・信用建玉の決済がご利用いただけます。<br/>
          株式のお取引は専用アプリからご利用くださいますようお願いいたします。
          {
            accounts.length > 1 ?
              <React.Fragment>
                <br/>特定口座の計算につきまして、スマートプラスの全サービスが
                <a
                  href="https://saison-pocket.smartplus-sec.com/support/faq/bc002"
                  target="_blank" rel="noopener noreferrer"
                >
                  主口座上で包括管理
                </a>
                されます。
              </React.Fragment>
              : null
          }
        </p>
        <dl>
          {
            accounts.map((account, index) => (
              <dt key={`account-${index}`}><img src={getAccountLogoMapping(account.rpId)} alt=""/></dt>
            ))
          }
        </dl>
      </div>
    )
  }
}

export default UserAccount;