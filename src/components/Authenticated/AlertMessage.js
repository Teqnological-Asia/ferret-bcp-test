import React, { Component } from 'react';

class AlertMessage extends Component {
  handleClose = () => {
    this.props.deleteError();
  }

  render() {
    const { error } = this.props;
    
    if (this.props.deleteError) {
      const timeout = setTimeout(this.handleClose, 3000);
      if (error === null) {
        clearTimeout(timeout);
      }
    }

    if (error) {
      return (
        <div className="l-msg" id="msg_block">
          <div className="p-alert" role="alert"><i className="icon-cancel-circled" id="close_alert" onClick={this.handleClose}></i>
            <p>{error}</p>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default AlertMessage;