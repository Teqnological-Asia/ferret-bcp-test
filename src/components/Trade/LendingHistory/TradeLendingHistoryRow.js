import React from "react";
import { formatDate } from "../../../utils";

const TradeLendingHistoryRow = ({ tradeLendingHistory }) => {
  const formatTradeType = tradeType => {
    const tradeTypes = {
      OPEN: "貸出",
      CLOSE: "返却"
    };

    return tradeTypes[tradeType];
  };

  return (
    <tr>
      <td className="c-l">{formatDate(tradeLendingHistory.tradeDate)}</td>
      <td className="c-l">{formatDate(tradeLendingHistory.settlementDate)}</td>
      <td className="c-l">{formatTradeType(tradeLendingHistory.lendingTradeType)}</td>
      <td className="c-l">{tradeLendingHistory.stock_name}</td>
      <td className="c-l">{tradeLendingHistory.quantity}</td>
      <td className="c-l">
        <a href="" target="blank">{tradeLendingHistory.lendingTradeType === "OPEN" ? "印刷" : null}</a>
      </td>
    </tr>
  );
};

export default TradeLendingHistoryRow;
