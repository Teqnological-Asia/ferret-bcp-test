import React from 'react';
import TradeCashHistoryRow from './TradeCashHistoryRow';
import EmptyTableRow from '../../Authenticated/EmptyTableRow';

const TradeCashHistoryList = ({tradeCashHistories}) => {
  const renderTradeHistories = (tradeCashHistories) => {
    if (tradeCashHistories.length > 0) {
      return tradeCashHistories.map((item, key) => (
        <TradeCashHistoryRow tradeCashHistory={item} key={key} />
      ));
    } else {
      return <EmptyTableRow message="明細がありません" />;
    }
  }

  return (
    <div className="c-table-responsive trade-history">
      <table className="c-table c-table_stripe table-cash">
        <thead>
          <tr>
            <th className="c-l">受渡日</th>
            <th className="c-l">種別</th>
            <th className="c-r">受渡金額</th>
            <th className="c-r">備考</th>
            <th className="c-r">通貨</th>
          </tr>
        </thead>
        <tbody>
          {renderTradeHistories(tradeCashHistories)}
        </tbody>
      </table>
    </div>
  );
}

export default TradeCashHistoryList;