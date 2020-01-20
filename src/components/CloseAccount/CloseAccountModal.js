import React, { Component } from "react";
import { getAccountLogoMapping } from "../../components/Home/UserAccount";

class CloseAccountModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClose: false
    };
  }
  close = () => {
    this.sendCloseStatus()
    this.setState({
      isClose: true
    });
  };
  sendCloseStatus = () =>{
    this.props.getCloseStatus(false)
  }
  render() {
    const { accounts, url } = this.props;
    const { isClose } = this.state;
    if (!isClose) {
      return (
        <div className="p-modal">
          <input
            className="p-modal_isopen"
            id="modal_open_close_account"
            type="radio"
            name="modal_switch_close_account"
            defaultChecked
          />
          <div className="p-modal_overlay_shomen"></div>
          <div className="p-modal_window p-modal_window_shomen">
            <div className="p-modal_window_contents">
              <div className="p-modal_window_msg_shomen">
                <div className="l-contents_body_inner">
                  <div className="p-section_user_apps">
                    <dl>
                      {accounts.map((account, index) => (
                        <dt key={`account-${index}`}>
                          <img
                            src={getAccountLogoMapping(account.rpId)}
                            alt=""
                          />
                          <div className="account-type">
                            {account.type === "MAIN" ? "主口座" : "副口座"}
                          </div>
                        </dt>
                      ))}
                    </dl>
                  </div>
                </div>
                <div className="u-mt20p">
                  <p>
                    こちらの口座は「主口座」に該当します。
                    <br />
                    <strong>スマートプラスでご利用の全口座を閉鎖</strong>
                    いたします。
                    <br />
                    副口座にお預りがないことをご確認ください。
                    <br />
                    （主口座と副口座については
                    <a href="https://help.smartplus-sec.com/s/article/bcp-syukouza">
                      こちら
                    </a>
                    ）
                  </p>
                </div>
              </div>
              <div className="p-modal_window_msg_close_account">
                <div className="u-mt20p">
                  <a
                    className="c-button"
                    onClick={this.close}
                    href={url}
                    target="blank"
                  >
                    全ての口座を閉鎖
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default CloseAccountModal;
