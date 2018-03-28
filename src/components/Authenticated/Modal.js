import React, { Component } from 'react';

class Modal extends Component {
  handleClose = () => {
    this.props.deleteModal();
  }

  render() {
    const { modal } = this.props;

    if (modal) {
      return (
        <div className="my-modal">
          <div className="my-modal_overlay" onClick={this.handleClose}></div>
          <label className="my-modal_close" onClick={this.handleClose}></label>
          <div className="my-modal_window">
            <div className="my-modal_window_contents">
              <div className="my-modal_window_head"><strong>{modal.title}</strong></div>
              <div className="my-modal_window_body">
                <p>{modal.text}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default Modal;