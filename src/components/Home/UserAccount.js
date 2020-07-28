import * as React from 'react';
import streamLogo from "../../assets/images/logo_stream.svg";
import ikebukuroLogo from "../../assets/images/logo_hr.svg";
import gokuuLogo from "../../assets/images/logo_gokuu.png";

export const getAccountNameMapping = (rpId) => {
  const accountNameMapping = {
    'smartplus': 'STREAM',
    'capolong': 'セゾンポケット',
    'draco37': 'WEALTH WING',
  };
  return accountNameMapping[rpId];
};

export const getAccountLogoMapping = (rpId) => {
  const accountLogoMapping = {
    'smartplus': streamLogo,
    'capolong': ikebukuroLogo,
    'draco37': gokuuLogo,
  };
  return accountLogoMapping[rpId];
};

class UserAccount extends React.Component {
  render() {
    const {accounts, currentAccount} = this.props;
    const hasMultipleAccounts = accounts.length > 1;
    const mainAccountType = sessionStorage.getItem("mainAccountType");
    const mainAccountName = mainAccountType && getAccountNameMapping(mainAccountType)

    return (
      <div className="p-section_user_apps u-mt20p">
        <p>
          いつも{currentAccount && getAccountNameMapping(currentAccount.rpId)}をご利用いただきありがとうございます。<br/>
          ＜お客さまサポートWEB＞ではお手続きや取引履歴、取引報告書の閲覧をご利用いただけます。<br/>
          特定口座の管理（税法上の計算）につきましては{mainAccountName}口座内で行われます。<br/>
          WEALTH WINGのお客さまは口座開設の際、自動的に{mainAccountName}口座が開設されます。
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