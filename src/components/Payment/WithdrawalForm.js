import React, { Component } from 'react';
import { formatCurrency } from '../../utils';
import { depositAccountTypes } from './common';
import { validateIntegerNumber } from '../../utils';

class WithdrawalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount } = this.state;
    const withdrawable = parseInt(this.props.cashWithdrawal.withdrawable, 10);

    if (
      !amount ||
      !validateIntegerNumber(amount) ||
      amount <= 0 ||
      amount > withdrawable
    ) {
      alert('入力をご確認ください');
      return;
    }

    this.props.saveWithdrawalAmountRequest(amount);
  }

  handleQuantityChange = (e) => {
    const target = e.target;
    const value = target.value;
    this.setState({amount: value});
  }

  render() {
    const { cashWithdrawal } = this.props;
    const { amount } = this.state;

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">出金</div>
          </div>
          {cashWithdrawal && <div className="c-table_inputs">
            <table>
              <tbody>
                <tr>
                  <th>出金指示可能額</th>
                  <td>{formatCurrency(cashWithdrawal.withdrawable)}円</td>
                </tr>
                <tr>
                  <th>ご出金先</th>
                  <td>{cashWithdrawal.bank_name} {cashWithdrawal.branch_name} {depositAccountTypes[cashWithdrawal.deposit_account_type]} {cashWithdrawal.account_number}</td>
                </tr>
                <tr>
                  <th>出金指示額</th>
                  <td>
                    <div className="u-row">
                      <div className="u-col_25 u-col_75_sp">
                        <input className="p-form-object" type="text" onChange={this.handleQuantityChange} value={amount}/>
                      </div>
                      <div className="u-col_25 u-col_25_sp"><span className="u-15px">円</span></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>}
          <div className="u-mt20p">
            <input className="c-button" type="submit" value="出金確認画面へ" disabled={!amount} />
          </div>
        </div>
      </form>
    );
  }
}

export default WithdrawalForm;