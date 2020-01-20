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
  getBtnContent = (currentAccount, accounts) => {
    if (!currentAccount || !accounts) return;
    const isPattern1 = currentAccount.type === "MAIN" && accounts.length >= 2;
    const isPattern2 =
      (currentAccount.type === "MAIN" && !(accounts.length > 1)) ||
      currentAccount.type !== "MAIN";
    if (isPattern1)
      return {
        pattern: 1,
        line1: "口座廃止書面",
        line2: "をダウンロード"
      };
    if (isPattern2)
      return {
        pattern: 2,
        line1: "口座廃止",
        line2: "書面をダウンロード"
      };
  };
  getBtnUrl = currentAccount => {
    if (!currentAccount) return;
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
    const url = this.getBtnUrl(currentAccount);
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
