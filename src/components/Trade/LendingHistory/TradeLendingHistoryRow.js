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


  return (
    <tr>
      <td className="c-l">{formatDate(tradeLendingHistory.tradeDate)}</td>
      <td className="c-l">{formatDate(tradeLendingHistory.settlementDate)}</td>
      <td className="c-l">{formatTradeType(tradeLendingHistory.lendingTradeType)}</td>
      <td className="c-l">{tradeLendingHistory.stock_name}</td>
      <td className={"c-r " + (tradeLendingHistory.quantity < 0 ? "u-minus" : "")}>
        {formatQuantity(tradeLendingHistory.quantity, tradeLendingHistory.lendingTradeType)}
      </td>
      <td className="c-l">{formatAccountType(tradeLendingHistory.accountType)}</td>
      <td className="c-l">
        <a href="" target="blank">{tradeLendingHistory.lendingTradeType === "Open" ? "印刷" : null}</a>
      </td>
    </tr>
  );
};

export default TradeLendingHistoryRow;
