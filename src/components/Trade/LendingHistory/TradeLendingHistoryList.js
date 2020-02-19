import React from "react";
import TradeLendingHistoryRow from "./TradeLendingHistoryRow";
import EmptyTableRow from "../../Authenticated/EmptyTableRow";

const TradeLendingHistoryList = ({ tradeLendingHistories, profile }) => {
  const renderTradeHistories = tradeLendingHistories => {
    if (tradeLendingHistories.length > 0) {
      return tradeLendingHistories.map((item, key) => (
        <TradeLendingHistoryRow tradeLendingHistory={item} key={key} profile={profile} />
      ));
    } else {
      return <EmptyTableRow message="明細がありません" />;
    }
  };
  const hasElement = tradeLendingHistories && tradeLendingHistories.length > 0;
  return (
    <div className="c-table-responsive lending-trade-history">
      <table className="c-table c-table_stripe">
        {hasElement ? (
          <thead>
            <tr>
              <th className="c-l">指示日</th>
              <th className="c-l">取引日</th>
              <th className="c-l">指示</th>
              <th className="c-l">銘柄</th>
              <th className="c-l">数量</th>
              <th className="c-l">明細書</th>
            </tr>
          </thead>
        ) : null}
        <tbody>{renderTradeHistories(tradeLendingHistories)}</tbody>
      </table>
    </div>
  );
};

export default TradeLendingHistoryList;
