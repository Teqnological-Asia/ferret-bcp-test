import React from "react";
import LendingBalanceRow from "./LendingBalanceRow";
import EmptyTableRow from "../../Authenticated/EmptyTableRow";

const LendingBalanceList = ({ tradeLendingBalance }) => {
  const renderTradeLendingBalance = tradeLendingBalance => {
    if (tradeLendingBalance && tradeLendingBalance.length > 0) {
      return tradeLendingBalance.map((item, key) => (
        <LendingBalanceRow tradeLendingBalance={item} key={key} />
      ));
    } else {
      return <EmptyTableRow message="明細がありません" />;
    }
  };
  const hasElement = tradeLendingBalance && tradeLendingBalance.length > 0
  return (
    <div className="c-table-responsive trade-history">
      <table className="c-table c-table_stripe">
        {hasElement? (
          <thead>
            <tr>
              <th className="c-l">銘柄コード</th>
              <th className="c-l">銘柄</th>
              <th className="c-l">数量</th>
            </tr>
          </thead>
        ) : null
        }
        <tbody>
          {renderTradeLendingBalance(tradeLendingBalance)}
        </tbody>
      </table>
    </div>
  );
};

export default LendingBalanceList;
