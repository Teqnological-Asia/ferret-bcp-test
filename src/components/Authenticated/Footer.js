import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="l-main_footer">
        <div className="p-footer">
          <div className="p-footer_inner"><strong>株式会社スマートプラス</strong>
            <dl>
              <dt>所在地</dt>
              <dd>
                102-0083 
                東京都千代田区麹町2-8 MLC麹町ビル 3階
              </dd>
              <dt>設立</dt>
              <dd>2017年3月</dd>
              <dt>金融商品取引業者</dt>
              <dd>関東財務局長（金商）第3031号</dd>
              <dt>加入協会</dt>
              <dd>日本証券業協会</dd>
            </dl>
            <ul>
              <li><a href="mailto:customer@smartplus-sec.com">お問い合わせ先</a></li>
              <li><a href="https://smartplus-sec.com/privacy.html" target="_blank">個人情報の取扱方針</a></li>
              <li><a href="https://smartplus-sec.com/socialmediapolicy.html" target="_blank">ソーシャルメディアガイドライン</a></li>
            </ul>
            <p>Copyright&copy;Smartplus. All rights Reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;