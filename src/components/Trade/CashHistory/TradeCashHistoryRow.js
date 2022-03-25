import React from 'react';
import {formatDate, formatCurrency} from '../../../utils';

const TradeCashHistoryRow = ({tradeCashHistory}) => {
  const formatTradeDate = (tradeTime) => {
    if (tradeTime === "WITHDRAWAL") {
      return formatDate(tradeCashHistory.executionTime)
    }
    return formatDate(tradeCashHistory.time)
  }
  const formatTradeType = (tradeType) => {
    const tradeTypes = {
      'WITHDRAWAL': '出金',
      'DEPOSIT': '入金',
      'DIVIDEND': '配当金',
      'CAPITAL_GAIN_TAX': '譲渡益税',
      'FEE': '手数料',
      'EXCHANGE': '為替振替',
      'SWEEP': '税金等調整金'
    };

    return tradeTypes[tradeType];
  }

  const formatCurrencyUnit = (currency) => {
    const currencyUnit = {
      'USD': 'ドル',
      'JPY': '円'
    }

    return currencyUnit[currency]
  }

  const displayCurrency = (amount) => {
    let valueCurrency = ""
    if (tradeCashHistory.type === 'WITHDRAWAL' || tradeCashHistory.type === 'FEE') {
      valueCurrency = "-"
    }
    if (tradeCashHistory.currency === 'USD') {
      valueCurrency += formatCurrency(amount, 2)
    } else if (tradeCashHistory.currency === 'JPY') {
      valueCurrency += formatCurrency(amount, 0)
    }
    return valueCurrency
  }

  return (
    <tr>
      <td className="c-l">{formatTradeDate(tradeCashHistory.type)}</td>
      <td className="c-l">{formatTradeType(tradeCashHistory.type)}</td>
      <td className={"c-r " + (tradeCashHistory.amount < 0 || parseInt(displayCurrency(tradeCashHistory.amount),10)<0 ? 'u-minus' : '')}>
        {
          displayCurrency(tradeCashHistory.amount)
        }
      </td>
      <td className="c-r ">{formatCurrencyUnit(tradeCashHistory.currency)}</td>
      <td className="c-r ">{tradeCashHistory.description}</td>
    </tr>
  );
}

export default TradeCashHistoryRow;
