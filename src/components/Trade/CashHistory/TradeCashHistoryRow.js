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
      'MARGIN_OPEN': '信用新規',
      'MARGIN_CLOSE': '信用返済',
      'MARGIN_SWAP': '現引/現渡',
      'WITHDRAWAL': '出金',
      'DEPOSIT': '入金',
      'SHIPMENT': '出庫',
      'RECEIPT': '入庫',
      'DIVIDEND': '配当金',
      'CAPITAL_GAIN_TAX': '譲渡益税',
      'CAPITAL_GAIN_REFUND': '譲渡益税還付',
      'FUND': '投資信託',
      'DIVIDEND_ADJUSTMENT': '配当落調整額',
      'OTHER': 'その他'
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
      <td className="c-r ">{tradeCashHistory.currency}</td>
      <td className="c-r ">{tradeCashHistory.description}</td>
    </tr>
  );
}

export default TradeCashHistoryRow;