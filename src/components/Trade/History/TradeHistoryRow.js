import React from 'react';
import { formatNumber, formatDate } from '../../../utils';

const TradeHistoryRow = ({tradeHistory}) => {
  const formatTradeType = (tradeType) => {
    const tradeTypes = {
      'equity': '現物取引',
      'withdraw': '出金',
      'deposit': '入金',
      'shipment': '出庫',
      'receipt': '入庫',
      'dividend': '配当金'
    };

    return tradeTypes[tradeType];
  }

  const formatAccountType = (accountType) => {
    const accountTypes = {
      'specific': '特定預り',
      'general': '一般預り'
    };

    return accountTypes[accountType];
  }

  const formatSide = (side) => {
    const sides = {
      'buy': '現物買',
      'sell': '現物売'
    };

    return sides[side];
  }

  const tradeDetail = tradeHistory.trade_detail;

  return (
    <tr>
      <td className="c-l">{formatDate(tradeHistory.executed_date)}</td>
      <td className="c-l">{formatDate(tradeHistory.delivery_date)}</td>
      <td className="c-l">{formatTradeType(tradeHistory.trade_type)}</td>
      <td className="c-l">{formatAccountType(tradeDetail.account_type)}</td>
      <td className="c-l">{formatSide(tradeDetail.side)}</td>
      <td className="c-l">{tradeDetail.stock_name}</td>
      <td className={"c-r " + (tradeDetail.quantity < 0 ? 'u-minus' : '')}>{formatNumber(tradeDetail.quantity)}</td>
      <td className={"c-r " + (tradeDetail.unit_price < 0 ? 'u-minus' : '')}>{formatNumber(tradeDetail.unit_price)}</td>
      <td className={"c-r " + (tradeDetail.fee < 0 ? 'u-minus' : '')}>{formatNumber(tradeDetail.fee)}</td>
      <td className={"c-r " + (tradeDetail.delivery_amount < 0 ? 'u-minus' : '')}>{formatNumber(tradeDetail.delivery_amount)}</td>
    </tr>
  );
}

export default TradeHistoryRow;