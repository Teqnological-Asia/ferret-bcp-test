import React from "react";

const LendingBalanceRow = ({ tradeLendingBalance }) => {
  const tradeDetail = tradeLendingBalance.trade_detail;

  return tradeDetail.tradeQuantity > 0 ? (
    <tr>
      <td className="c-l">{tradeDetail.productCode}</td>
      <td className="c-l">{tradeDetail.name}</td>
      <td className="c-l">{tradeDetail.tradeQuantity}</td>
    </tr>
  ) : null;
};

export default LendingBalanceRow;
