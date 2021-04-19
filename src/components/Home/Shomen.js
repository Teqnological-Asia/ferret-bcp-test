import React, { Component } from 'react';
import ShomenRow from './ShomenRow';


class Shomen extends Component {
  constructor(props) {
    super(props);
    this.inputElement = null

    this.state = {
      listRenderedDocuments: null,
      numberOfClickedDocuments: 0,
      isButtonDisable: true
    }
  }

  focusInput = () => {
    this.inputElement && this.inputElement.current.click()
  }

  componentDidUpdate(prevProps) {
    const { documents, hasFinishReading } = this.props;
    const listDocuments = documents.filter((edocument) => edocument != null);
    const listRenderedDocuments = listDocuments.filter((edocument) => edocument.deliver_status === '0');
    this.setState({
      listRenderedDocuments: listRenderedDocuments
    });
    if (prevProps.hasFinishReading !== hasFinishReading) {
      this.focusInput();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.documents !== nextProps.documents || this.state.isButtonDisable !== nextState.isButtonDisable || this.state.numberOfClickedDocuments !== nextState.numberOfClickedDocuments || this.props.hasFinishReading !== nextProps.hasFinishReading) {
      return true;
    }
    return false;
  }

  handleCloseShomen = () => {
    const { documents } = this.props;
    const submitDocuments = documents.filter(edocument => edocument.deliver_status === '0' || edocument.deliver_status === '1');
    var codes = [];
    for (var i = 0; i < submitDocuments.length; i++) {
      codes.push(submitDocuments[i].code);
    }
    this.props.lbxConfirmRequest(codes)
  }

  handleClickLink = (edocument) => {
    const currentnumberOfClickedDocuments = this.state.numberOfClickedDocuments;
    const newnumberOfClickedDocuments = currentnumberOfClickedDocuments + 1;

    this.setState({
      numberOfClickedDocuments: newnumberOfClickedDocuments
    });

    if (newnumberOfClickedDocuments === this.state.listRenderedDocuments.length) {
      this.setState({
        isButtonDisable: false
      });
    }

    window.open(edocument.url, "_blank");
  }

  render() {
    const { documents } = this.props;

    if (documents == null) return null;
    if (documents.length === 0) return null;

    const listDocuments = documents.filter((edocument) => edocument != null);
    const renderedDocuments = listDocuments.filter(edocument => edocument.deliver_status === '0');
    const listRenderedDocuments = listDocuments.map((edocument, notification_id) =>
      (edocument.deliver_status === '0') &&
      <ShomenRow key={notification_id} edocument={edocument} handleClickLink={this.handleClickLink} />
    );

    if (sessionStorage.getItem('is_unconfirmed') !== null && renderedDocuments.length !== 0) {
      return (
          <div className="p-modal">
            <input className="p-modal_isopen" id="modal_open_shomen" type="radio" name="modal_switch_shomen" defaultChecked />
            <input className="p-modal_closebutton" id="modal_close-button_shomen" type="radio" name="modal_switch_shomen" ref={this.inputElement}/>
            <div className="p-modal_overlay_shomen"></div>
            <div className="p-modal_window p-modal_window_shomen">
              <div className="p-modal_window_contents">
                <div className="p-modal_window_msg_shomen">
                  <p>■契約締結前交付書面の確認<br/>いつも弊社をご利用いただきありがとうございます。契約締結前交付書面の再交付をいたします。金融商品取引法に基づき、お客様に各種金融商品取引の仕組み・リスク等を再度ご確認していただくため、弊社では年に一度、もしくは改定時に契約締結前交付書面の再交付をさせていただきます。<br/>お手数ですが、下記URLを閲覧いただき、「確認・同意」ボタンを押してください。（「確認・同意」頂けない場合には、ログインいただけませんのでご注意ください。）</p>
                  <div className="u-mt20p">
                    {listRenderedDocuments}
                  </div>
                  <div className="center">
                    <button className="close_shomen" onClick={this.handleCloseShomen} disabled={this.state.isButtonDisable}>確認・同意</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    }
    return null;
  }
}

export default Shomen;
