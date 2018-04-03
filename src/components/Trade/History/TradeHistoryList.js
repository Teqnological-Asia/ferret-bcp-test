import React from 'react';
import TradeHistoryRow from './TradeHistoryRow';
import EmptyTableRow from '../../Authenticated/EmptyTableRow';

const TradeHistoryList = ({tradeHistories}) => {
  const renderTradeHistories = (tradeHistories) => {
    if (tradeHistories.length > 0) {
      return tradeHistories.map((item, key) => (
        <TradeHistoryRow tradeHistory={item} key={key} />
      ));
    } else {
      return <EmptyTableRow message="期間中の入出金はありません。" />;
    }
  }

  return (
    <div className="c-table-responsive">
      <table className="c-table c-table_stripe">
        <thead>
          <tr>
            <th className="c-l">約定日</th>
            <th className="c-l">受渡日</th>
            <th className="c-l">種別</th>
            <th className="c-l">区分</th>
            <th className="c-l">売買</th>
            <th className="c-l">銘柄</th>
            <th className="c-r">数量</th>
            <th className="c-r">約定単価</th>
            <th className="c-r">手数料等</th>
            <th className="c-r">受渡金額</th>
          </tr>
        </thead>
        <tbody>
          {renderTradeHistories(tradeHistories)}
        </tbody>
      </table>
    </div>
  );
}

export default TradeHistoryList;