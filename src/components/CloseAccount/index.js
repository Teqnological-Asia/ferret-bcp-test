import React, { Component, Fragment } from "react";
import CloseAccountModal from "./CloseAccountModal";
class CloseAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  componentDidMount() {
    this.props.loadAccountsInfoRequest();
  }

  isPattern1 = () => {
    const {currentAccount, accounts} = this.props;
    if (!currentAccount || !accounts) return;
    return currentAccount.type === "MAIN" && accounts.length >= 2
  };

  isPattern2 = () => {
    const {currentAccount, accounts} = this.props;
    if (!currentAccount || !accounts) return;
    return (currentAccount.type === "MAIN" && !(accounts.length > 1)) ||
      currentAccount.type !== "MAIN";
  };

  getBtnContent = (currentAccount, accounts) => {
    if (!currentAccount || !accounts) return;
    if (this.isPattern1())
      return {
        pattern: 1,
        line1: "口座廃止書面",
        line2: "をダウンロード"
      };
    if (this.isPattern2())
      return {
        pattern: 2,
        line1: "口座廃止",
        line2: "書面をダウンロード"
      };
  };
  getBtnUrl = (currentAccount, accounts) => {
    if (!currentAccount || !accounts) return;
    if (this.isPattern1()) return "https://smartplus-sec.com/support/close-all.pdf";
    switch (currentAccount.rpId) {
      case "smartplus": {
        return "https://smartplus-sec.com/support/close-smartplus.pdf";
      }
      case "capolong": {
        return "https://smartplus-sec.com/support/close-saisonpocket.pdf";
      }
      case "wealthwing": {
        return "https://smartplus-sec.com/support/close-wealthwing.pdf";
      }
      default:
        return;
    }
  };
  openModal = () => {
    this.setState({
      isOpen: true
    });
  };
  closeModal = (status) =>{
    this.setState({
      isOpen: status
    })
  }
  render() {
    const { currentAccount, accounts } = this.props;
    const { isOpen } = this.state;
    const content = this.getBtnContent(currentAccount, accounts);
    const url = this.getBtnUrl(currentAccount, accounts);
    return (
      <Fragment>
        {
          isOpen&&accounts?<CloseAccountModal accounts={accounts} url={url} getCloseStatus={this.closeModal}/>:null
        }
        <div className="l-contents_body_inner">
          <div className="u-mt40p">
            <div className="p-section_header">
              <div className="p-section_header_title">口座閉鎖のお申し出​</div>
            </div>
            <p className="nisa-description">
              口座を閉鎖したい場合は以下より書面をダウンロードし印刷、ご記入の上ご返送ください。
              <br />
              お申し出にあたり、書面記載のご注意事項をよくご確認ください。
            </p>
            <p className="nisa-description" style={{marginTop: 20}}>
              ＜ご注意事項＞<br/>
              ・有価証券・お預り金がない状態でないとお受けできません。お預かり資産の売却、出金、移管等の手続きを予め行ってください。<br/>
              ※当社の出金最低金額は1,000円となっているため、お預かり残金が1,000円未満の場合、カスタマーサポートセンターにて出金を承ります。<br/>
              ・主口座を廃止しようとする場合、弊社にて開設した全ての副口座を含むお取引口座すべてについて廃止手続きを進めさせていただきます。<br/>
              尚、いずれかの副口座に有価証券・お預かり金がある場合廃止手続きをお受けできませんので、お預かり資産の売却、出金、移管等の手続きを予め行ってください。<br/>
              ・証券総合口座の解約手続きは、翌年3月末に行います。翌年3月末までは申告に必要な書類等を取得できるよう、お客さま口座にログインが可能な状態としております。<br/>
              ・信用取引を行ったお客さまで、配当落調整金の支払いが発生した場合、当社から後日ご請求をさせて頂きます。<br/>
              ・配当金、配当落調整金の受取りが発生した場合、お客さまの出金先金融機関へお振込をさせて頂きます。出金先金融機関に着金ができない場合、ご連絡をさせて頂きます。<br/>
              ・不公正取引や証券事故など、関係各機関からの調査依頼があった場合のほか、当社が必要と認める場合には、ご連絡を差し上げ場合があることを予めご理解ください。<br/>
              ・証券総合口座廃止届出書のご提出時は、必ず本人確認書類貼付けシートに本人確認書類の写しを貼り付け、同封してください。<br/>
              なお、口座廃止届出時に本人確認書類と認められる書類については、貼付けシートに記載の案内をご確認ください。
            </p>
            <a
              className="c-button c-button_small"
              href={content && content.pattern === 2 && url ? url : null}
              // rel="noopener noreferrer"
              target="blank"
              onClick={() => {
                if (content && content.pattern === 1) this.openModal();
              }}
              download={content &&content.pattern === 2  ? url : false}
            >
              {content ? content.line1 : null}
              <br />
              {content ? content.line2 : null}
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CloseAccount;
