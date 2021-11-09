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
      'equity': '現物取引',
      'margin_open': '信用新規',
      'margin_close': '信用返済',
      'margin_swap': '現引/現渡',
      'withdraw': '出金',
      'deposit': '入金',
      'shipment': '出庫',
      'receipt': '入庫',
      'dividend': '配当金',
      'CAPITAL_GAIN_TAX': '譲渡益税',
      'capital_gain_refund': '譲渡益税還付',
      'fund': '投資信託',
      'dividend_adjustment': '配当落調整額',
      'other': 'その他'
    };

    return tradeTypes[tradeType];
  }

  return (
    <tr>
      <td className="c-l">{formatTradeDate(tradeCashHistory.type)}</td>
      <td className="c-l">{formatTradeType(tradeCashHistory.type)}</td>
      <td className={"c-r " + (tradeCashHistory.amount < 0 ? 'u-minus' : '')}>
        {
          tradeCashHistory.type === 'margin_open' ?
            '-' : formatCurrency(tradeCashHistory.amount, 0)
        }
      </td>
      <td className="c-r ">{tradeCashHistory.description}</td>
      <td className="c-r ">{tradeCashHistory.currency}</td>
    </tr>
  );
}

export default TradeCashHistoryRow;