import React from "react";
import { formatDate } from "../../../utils";

const TradeLendingHistoryRow = ({ tradeLendingHistory }) => {
  const formatTradeType = tradeType => {
    const tradeTypes = {
      Open: "貸出",
      Close: "返却"
    };

    return tradeTypes[tradeType];
  };

  const formatAccountType = accountType => {
    const accountTypes = {
      specific: "特定",
      general: "一般"
    };

    return accountTypes[accountType];
  };

  const formatQuantity = (value, trade_type) => {
    const types = [
      "equity",
      "margin_open",
      "margin_close",
      "margin_swap",
      "shipment",
      "receipt",
      "fund"
    ];
    if (value) {
      if (types.includes(trade_type)) {
        return parseInt(value, 10);
      }
    }
    return "";
  };

  const tradeDetail = tradeLendingHistory.trade_detail;

  return (
    <tr>
      <td className="c-l">{formatDate(tradeLendingHistory.executed_date)}</td>
      <td className="c-l">{formatDate(tradeLendingHistory.delivery_date)}</td>
      <td className="c-l">{formatTradeType(tradeLendingHistory.trade_type)}</td>
      <td className="c-l">{tradeDetail.stock_name}</td>
      <td className={"c-r " + (tradeDetail.quantity < 0 ? "u-minus" : "")}>
        {formatQuantity(tradeDetail.quantity, tradeLendingHistory.trade_type)}
      </td>
      <td className="c-l">{formatAccountType(tradeDetail.account_type)}</td>
      <td className="c-l">
        <a href="" target="blank">{tradeLendingHistory.trade_type === "Open" ? "印刷" : null}</a>
      </td>
    </tr>
  );
};

export default TradeLendingHistoryRow;
