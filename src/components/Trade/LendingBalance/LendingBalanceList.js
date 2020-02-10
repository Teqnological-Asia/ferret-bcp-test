import React from "react";
import LendingBalanceRow from "./LendingBalanceRow";
import EmptyTableRow from "../../Authenticated/EmptyTableRow";

const LendingBalanceList = ({ tradeLendingBalance }) => {
  const renderTradeLendingBalance = tradeLendingBalance => {
    if (tradeLendingBalance.length > 0) {
      return tradeLendingBalance.map((item, key) => (
        <LendingBalanceRow tradeLendingBalance={item} key={key} />
      ));
    } else {
      return <EmptyTableRow message="明細がありません" />;
    }
  };

  return (
    <div className="c-table-responsive trade-history">
      <table className="c-table c-table_stripe">
        <thead>
          <tr>
            <th className="c-l">銘柄コード</th>
            <th className="c-l">銘柄</th>
            <th className="c-l">数量</th>
          </tr>
        </thead>
        <tbody>
          {/* {renderTradeLendingBalance(tradeLendingBalance)} */}
          <tr>
            <td className="c-l ">1357</td>
            <td className="c-l ">日経ダブ</td>
            <td className="c-l ">4,000</td>
          </tr>
          <tr>
            <td className="c-l ">1357</td>
            <td className="c-l ">日経ダブ</td>
            <td className="c-l ">4,000</td>
          </tr>
          <tr>
            <td className="c-l ">1357</td>
            <td className="c-l ">日経ダブ</td>
            <td className="c-l ">4,000</td>
          </tr>
          <tr>
            <td className="c-l ">1357</td>
            <td className="c-l ">日経ダブ</td>
            <td className="c-l ">4,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LendingBalanceList;
