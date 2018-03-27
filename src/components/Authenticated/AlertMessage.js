import React, { Component } from 'react';

class AlertMessage extends Component {
  handleClose = () => {
    console.log("aaaa")
    this.props.deleteError();
  }

  render() {
    const { error } = this.props;
    const hiddenClass = error ? '' : 'is_hidden';

    const timeout = setTimeout(this.handleClose, 3000);
    if (error === null) {
      clearTimeout(timeout);
    }

    return (
      <div className={"l-msg " + hiddenClass} id="msg_block">
        <div className="p-alert" role="alert"><i className="icon-cancel-circled" id="close_alert" onClick={this.handleClose}></i>
          <p>{error}</p>
        </div>
      </div>
    );
  }
}

export default AlertMessage;