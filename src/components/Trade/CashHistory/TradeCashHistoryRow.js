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
      'WITHDRAWAL': '出金',
      'DEPOSIT': '入金',
      'DIVIDEND': '配当金',
      'CAPITAL_GAIN_TAX': '譲渡益税',
      'FEE':'手数料',
      'EXCHANGE':'為替振替',
      'SWEEP':'税金等調整金'
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

  const displayCurrency = (currency) => {
    if (tradeCashHistory.type === 'WITHDRAWAL' || tradeCashHistory.type === 'FEE'){
      return '-' + formatCurrency(currency, 0)
    }
    if (tradeCashHistory.currency === 'USD') {
      return formatCurrency(currency, 2)
    }
    else if (tradeCashHistory.currency === 'JPY')
    return formatCurrency(currency,0)
  }

  return (
    <tr>
      <td className="c-l">{formatTradeDate(tradeCashHistory.type)}</td>
      <td className="c-l">{formatTradeType(tradeCashHistory.type)}</td>
      <td className={"c-r " + (tradeCashHistory.amount < 0 ? 'u-minus' : '')}>
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