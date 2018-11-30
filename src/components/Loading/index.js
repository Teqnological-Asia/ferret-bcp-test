import React, { Component } from 'react';

class Loading extends Component {
  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return (
        <div className="p-modal">
          <input className="p-modal_isopen" id="loading" type="radio" name="modal_switch_logout" defaultChecked/>
          <div className="p-modal_overlay_logout"></div>
          <div className="p-modal_window bg-transparent">
            <div className="loader"/>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default Loading;