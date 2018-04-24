import React, { Component } from 'react';

class Shomen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFirstLinkClicked: false,
      isSecondLinkClicked: false
    }
  }

  handleCloseShomen = () => {
    this.inputElement.click();
    this.props.submitConfirmationRequest();
  }

  handleClickFirstLink = () => {
    this.setState({isFirstLinkClicked: true});
    window.open("http://google.com", "_blank");
  }

  handleClickSecondLink = () => {
    this.setState({isSecondLinkClicked: true});
    window.open("http://google.com", "_blank");
  }

  render() {
    const { isFirstLinkClicked, isSecondLinkClicked } = this.state;

    if (sessionStorage.getItem('is_unconfirmed') !== null) {
      return (
        <div className="p-modal">
          <input className="p-modal_isopen" id="modal_open_shomen" type="radio" name="modal_switch_shomen" defaultChecked />
          <input className="p-modal_closebutton" id="modal_close-button_shomen" type="radio" name="modal_switch_shomen" ref={input => this.inputElement = input}/>
          <div className="p-modal_overlay_shomen"></div>
          <div className="p-modal_window p-modal_window_shomen">
            <div className="p-modal_window_contents">
              <div className="p-modal_window_msg_shomen">
                <p>■契約締結前交付書面の確認<br/>いつも弊社をご利用いただきありがとうございます。契約締結前交付書面の再交付をいたします。金融商品取引法に基づき、お客様に各種金融商品取引の仕組み・リスク等を再度ご確認していただくため、弊社では年に一度、もしくは改定時に契約締結前交付書面の再交付をさせていただきます。<br/>お手数ですが、下記URLを閲覧いただき、「確認・同意」ボタンを押してください。（「確認・同意」頂けない場合には、ログインいただけませんのでご注意ください。）</p>
                <div className="u-mt20p">
                  <a className="cursor" onClick={this.handleClickFirstLink}>上場有価証券等書面</a><br/>
                  <a className="cursor" onClick={this.handleClickSecondLink}>「株式」の重要事項のご説明</a>
                </div>
                <div className="center">
                  <button className="close_shomen" onClick={this.handleCloseShomen} disabled={!isFirstLinkClicked || !isSecondLinkClicked}>確認・同意</button>
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

export default Shomen;