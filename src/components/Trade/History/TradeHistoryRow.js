import React from 'react';
import { formatCurrency, formatDate } from '../../../utils';

const TradeHistoryRow = ({tradeHistory}) => {
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
      'capital_gain_tax': '譲渡益税',
      'capital_gain_refund': '譲渡益税還付',
      'fund': '投資信託',
      'dividend_adjustment': '配当落調整額',
      'other': 'その他'
    };

    return tradeTypes[tradeType];
  }

  const formatAccountType = (accountType) => {
    const accountTypes = {
      'specific': '特定',
      'tsumitate_nisa': '積立NISA',
      'general': '一般'
    };

    return accountTypes[accountType];
  }

  const formatSide = (side, trade) => {
    const types = ["equity","margin_open","margin_close","margin_swap","fund"];

    let sides = {
      'buy': '買',
      'sell': '売'
    };

    const tradeType = {
      'equity': '現物',
      'margin_open': '新規',
      'margin_close': '返済',
      'margin_swap': '',
      'fund': '投信'
    }

    if (trade === 'margin_swap') {
      sides = {
        'buy': '現渡',
        'sell': '現引'
      };
    }

    if (types.includes(trade) && side) {
      return tradeType[trade] + sides[side];
    }

    return '';
  }

  const formatQuantity = (value, trade_type) => {
    const types = ["equity","margin_open","margin_close","margin_swap","shipment","receipt","fund"];
    if (value) {
      if (types.includes(trade_type)) {
        return parseInt(value, 10);
      }
    }
    return "";
  }

  const tradeDetail = tradeHistory.trade_detail;
  const {
    account_type, side, stock_name, description,
    quantity, unit_price, fee, delivery_amount,
    junhibu, gyakuhibu, stock_lending_fee,
    name_transfer_fee, administration_fee
  } = tradeDetail;

  return (
    <tr>
      <td className="c-l">{formatDate(tradeHistory.executed_date)}</td>
      <td className="c-l">{formatDate(tradeHistory.delivery_date)}</td>
      <td className="c-l">{formatTradeType(tradeHistory.trade_type)}</td>
      <td className="c-l">{formatAccountType(account_type)}</td>
      <td className="c-l">{formatSide(side, tradeHistory.trade_type)}</td>
      <td className="c-l">{stock_name}</td>
      <td className={"c-r " + (quantity < 0 ? 'u-minus' : '')}>{formatQuantity(quantity, tradeHistory.trade_type)}</td>
      <td className={"c-r " + (unit_price < 0 ? 'u-minus' : '')}>{formatCurrency(unit_price, 4)}</td>
      <td className={"c-r " + (fee < 0 ? 'u-minus' : '')}>
        {
          fee !== '0' ?
          formatCurrency(fee, 0)
          : '-'
        }
      </td>
      <td className={"c-r " + (delivery_amount < 0 ? 'u-minus' : '')}>
        {
          tradeHistory.trade_type === 'margin_open' ?
          '-' : formatCurrency(delivery_amount, 0)
        }
      </td>
      <td className={"c-r " + (junhibu < 0 ? 'u-minus' : '')}>{formatCurrency(junhibu, 0)}</td>
      <td className={"c-r " + (gyakuhibu < 0 ? 'u-minus' : '')}>{formatCurrency(gyakuhibu, 0)}</td>
      <td className={"c-r " + (stock_lending_fee < 0 ? 'u-minus' : '')}>{formatCurrency(stock_lending_fee, 0)}</td>
      <td className={"c-r " + (name_transfer_fee < 0 ? 'u-minus' : '')}>{formatCurrency(name_transfer_fee, 0)}</td>
      <td className={"c-r " + (administration_fee < 0 ? 'u-minus' : '')}>{formatCurrency(administration_fee, 0)}</td>
      <td className="c-r ">{description}</td>
    </tr>
  );
}

export default TradeHistoryRow;