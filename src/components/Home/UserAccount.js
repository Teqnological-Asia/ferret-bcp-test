import * as React from 'react';
import streamLogo from "../../assets/images/logo_stream.svg";
import ikebukuroLogo from "../../assets/images/logo_hr.svg";
import shiodomeLogo from "../../assets/images/logo_shiodome.svg";

const getAccountNameMapping = (rpId) => {
  const accountNameMapping = {
    'smartplus': 'STREAM',
    'capolong': 'セゾンポケット',
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
    const hasMultipleAccounts = accounts.length > 1;

    return (
      <div className="p-section_user_apps u-mt20p">
        <p>
          いつも{currentAccount && getAccountNameMapping(currentAccount.rpId)}をご利用いただきありがとうございます。<br/>
          ＜お客さまサポートWEB＞ではお手続きや取引履歴、スマホがご利用頂けない際の緊急時の売却・信用建玉決済をご利用いただけます。<br/>
          株式のお取引は専用アプリをご利用くださいますようお願いいたします。
          {
            hasMultipleAccounts ?
              <React.Fragment>
                <br/>特定口座の計算につきまして、スマートプラスの全サービスが
                <a
                  href="https://help.smartplus-sec.com/s/article/bcp-syukouza"
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
              <dt key={`account-${index}`}>
                <img src={getAccountLogoMapping(account.rpId)} alt=""/>
                {
                  hasMultipleAccounts ?
                    <div className="account-type">({account.type === 'MAIN' ? '主口座' : '副口座'})</div>
                    : null
                }
              </dt>
            ))
          }
        </dl>
      </div>
    )
  }
}

export default UserAccount;