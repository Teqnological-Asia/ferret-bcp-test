import React from "react";

const LendingBalanceRow = ({ tradeLendingBalance }) => {
  const tradeDetail = tradeLendingBalance.trade_detail;

  return tradeDetail.order_unit > 0 ? (
    <tr>
      <td className="c-l">{tradeDetail.code}</td>
      <td className="c-l">{tradeDetail.short_name}</td>
      <td className="c-l">{tradeDetail.order_unit}</td>
    </tr>
  ) : null;
};

export default LendingBalanceRow;
