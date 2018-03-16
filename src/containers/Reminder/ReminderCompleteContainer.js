import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReminderComplete from '../../components/Reminder/Complete';

class ReminderCompleteContainer extends Component {
  render() {
    return (
      <ReminderComplete />
    );
  }
}

export default connect()(ReminderCompleteContainer);