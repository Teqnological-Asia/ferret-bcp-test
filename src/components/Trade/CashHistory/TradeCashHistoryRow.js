import React from 'react';
import { formatDateTime, formatCurrency} from '../../../utils';

const TradeCashHistoryRow = ({tradeCashHistory}) => {
  const formatTradeDate = (tradeTime) => {
    if(tradeTime==="WITHDRAWAL"){
      return formatDateTime(tradeCashHistory.executionTime)
    }
    return formatDateTime(tradeCashHistory.time)
  }
  const formatTradeType = (tradeType) => {
    const tradeTypes = {
      'WITHDRAWAL': '入出金',
      'DEPOSIT': '入出金',
      'DIVIDEND': '配当金',
      'CAPITAL_GAIN_TAX': '譲渡益税',
      'FEE':'入出金',
      'EXCHANGE':'入出金',
      'SWEEP':'入出金'
    };

    return tradeTypes[tradeType];
  }

  const formatCurrencyUnit = (currency) => {
    const currencyUnit = {
      'USD':'ドル',
      'JPY': '円'
    }

    return currencyUnit[currency]
  }

  return (
    <tr>
      <td className="c-l">{formatTradeDate(tradeCashHistory.type)}</td>
      <td className="c-l">{formatTradeType(tradeCashHistory.type)}</td>
      <td className={"c-r " + (tradeCashHistory.amount < 0 ? 'u-minus' : '')}>
        {
          formatCurrency(tradeCashHistory.amount, 0)
        }
      </td>
      <td className="c-r ">{formatCurrencyUnit(tradeCashHistory.currency)}</td>
      <td className="c-r ">{tradeCashHistory.description}</td>
    </tr>
  );
}

export default TradeCashHistoryRow;