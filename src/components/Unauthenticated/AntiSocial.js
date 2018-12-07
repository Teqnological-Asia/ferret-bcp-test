import React, { Component } from 'react';

class AntiSocial extends Component {
  close = () => {
    this.props.setAntiSocial(false);
  }

  render() {
    const { isAntiSocial } = this.props;

    if (isAntiSocial) {
      return (
        <div className="p-modal">
          <input className="p-modal_isopen" id="modal_open_logout" type="radio" name="modal_switch_logout" defaultChecked/>
          <div className="p-modal_overlay_logout"></div>
          <div className="p-modal_window antisocial" >
            <div className="p-modal_window_contents">
              <div className="p-modal_window_msg_logout">
                <p>
                  申し訳ございませんが、<br/>
                  あなたは総合的見地から口座開設を<br/>
                  承ることが出来ませんでした。
                </p>
                <div className="u-mt20p">
                  <a className="c-button" onClick={this.close}>OK</a>
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

export default AntiSocial;