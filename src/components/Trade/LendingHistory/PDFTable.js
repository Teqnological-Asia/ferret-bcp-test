import React, { Component } from "react";
import moment from "moment";
import { formatDate } from "../../../utils";
import PDFButton from "./PDFButton";
class PDFTable extends Component {
  constructor(props) {
    super(props);
    let today = new Date();
    today.setDate(today.getDate());
    this.state = {
      isClose: false,
      today: moment(today).format("YYYY年MM月DD日")
    };
  }
  closeModal = status => {
    this.sendCloseStatus();
    this.setState({
      isClose: status
    });
  };
  sendCloseStatus = () => {
    this.props.getCloseStatus(false);
  };

  render() {
    const { id, tradeLendingHistory, profile } = this.props;
    const { today, isClose } = this.state;
    if (!isClose) {
      return (
        <div className="p-modal">
          <input
            className="p-modal_isopen"
            id="modal_open_close_account"
            type="radio"
            name="modal_switch_close_account"
            defaultChecked={!isClose}
          />
          <div className="p-modal_overlay_shomen"></div>
          <div className="p-modal_window p-modal_window_shomen">
            <div id={id} className="p-modal_window_contents" style={{padding: '7px'}}>
              <div className="pdf-table-content-flex-end">
                <p>1/1ページ</p>
                <p>{`作成日:${today}`}</p>
              </div>
              <div className="pdf-table-title">個別取引明細書</div>
              <div className="c-table-responsive pdf-table">
                <table className="c-table c-table_stripe">
                  <tbody>
                    <tr>
                      <td className="c-l">貸出者</td>
                      <td className="c-l">{profile.name_kana}</td>
                    </tr>
                    <tr>
                      <td className="c-l">借入者</td>
                      <td className="c-l">株式会社スマートプラス</td>
                    </tr>
                    <tr>
                      <td className="c-l">約定日</td>
                      <td className="c-l">
                        {formatDate(tradeLendingHistory.tradeDate)}
                      </td>
                    </tr>
                    <tr>
                      <td className="c-l">取引日</td>
                      <td className="c-l">
                        {formatDate(tradeLendingHistory.settlementDate)}
                      </td>
                    </tr>
                    <tr>
                      <td className="c-l">銘柄名</td>
                      <td className="c-l">{`(${tradeLendingHistory.productCode})${tradeLendingHistory.stock_name}`}</td>
                    </tr>
                    <tr>
                      <td className="c-l">貸借数量</td>
                      <td className="c-l">{tradeLendingHistory.quantity}</td>
                    </tr>
                    <tr>
                      <td className="c-l">貸借期間</td>
                      <td className="c-l">オープンエンド</td>
                    </tr>
                    <tr>
                      <td className="c-l">貸借料</td>
                      <td className="c-l">年利0.10%</td>
                    </tr>
                    <tr>
                      <td className="c-l">摘要</td>
                      <td className="c-l">ー</td>
                    </tr>
                    <tr>
                      <td className="c-l">その他（特約事項）</td>
                      <td className="c-l">
                        貸株料については、弊社ホームページに提示する料率を適用するものとします。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div className="pdf-table-content-flex-end">
                <p>株式会社スマートプラス</p>
                <p>（取扱店）本店</p>
              </div>
            </div>
            <PDFButton id={id} getCloseStatus={this.closeModal} />
          </div>
        </div>
      );
    }
    return null;
  }
}

export default PDFTable;
