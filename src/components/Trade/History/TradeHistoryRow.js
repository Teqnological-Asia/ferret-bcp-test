import React from 'react';
import { formatNumber, formatDate } from '../../../utils';

const TradeHistoryRow = ({tradeHistory}) => {
  const formatTradeType = (tradeType) => {
    let result = '';

    switch(tradeType) {
      case 'equity':
        result = '現物取引';
        break;
      case 'withdraw':
        result = '出金';
        break;
      case 'deposit':
        result = '入金';
        break;
      case 'shipment':
        result = '出庫';
        break;
      case 'receipt':
        result = '入庫';
        break;
      case 'dividend':
        result = '配当金';
        break;
      default:
        result = '';
        break;
    }

    return result;
  }

  const formatAccountType = (accountType) => {
    let result = '';

    if (accountType === 'specific') {
      result = '特定預り';
    } else if (accountType === 'general') {
      result = '一般預り';
    }

    return result;
  }

  const formatSide = (side) => {
    let result = '';

    if (side === 'buy') {
      result = '現物買';
    } else if (side === 'sell') {
      result = '現物売';
    }

    return result;
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