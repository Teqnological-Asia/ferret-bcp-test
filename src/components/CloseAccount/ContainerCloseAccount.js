import React, { Component } from "react";
import {CloseAccount} from "@Finatext/baas-common-bcp";
import CloseAccountContent from "./CloseAccountContent";

class ContainerCloseAccount extends Component {

  componentDidMount() {
    this.props.loadAccountsInfoRequest();
  }
  render() {
    const {  accounts, currentAccount} = this.props;
    return (
      <CloseAccount accounts={accounts} currentAccount={currentAccount}>
        <CloseAccountContent/>
      </CloseAccount>
      )
  }
}

export default ContainerCloseAccount;
