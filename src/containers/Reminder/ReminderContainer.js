import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reminder from '../../components/Reminder';

class ReminderContainer extends Component {
  render() {
    return (
      <Reminder />
    );
  }
}

export default connect()(ReminderContainer);