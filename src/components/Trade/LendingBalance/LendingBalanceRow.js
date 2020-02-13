import React from "react";

const LendingBalanceRow = ({ tradeLendingBalance }) => {

  return tradeLendingBalance.tradeQuantity > 0 ? (
    <tr>
      <td className="c-l">{tradeLendingBalance.productCode}</td>
      <td className="c-l">{tradeLendingBalance.name}</td>
      <td className="c-l">{tradeLendingBalance.tradeQuantity}</td>
    </tr>
  ) : null;
};

export default LendingBalanceRow;
