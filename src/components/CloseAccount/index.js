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
      case "draco37": {
        return "https://smartplus-sec.com/support/close-wealthwing.pdf";
      }
      case "ferret": {
        return "https://smartplus-sec.com/support/close-jamwrap.pdf";
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
    const { currentAccount, accounts, children } = this.props;
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
            {children}
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
