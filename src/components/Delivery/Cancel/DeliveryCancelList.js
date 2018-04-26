import React from 'react';
import { formatCurrency } from '../../../utils';
import { account_types } from '../common';

const DeliveryCancelList = ({deliveries, handleCheck}) => {
  if (deliveries.length === 0) {
    return (
      <div className="p-section_lead u-mt20p">
        <p className="p-no_item">0 item（表示する内容がない場合　文言要確認）</p>
      </div>
    );
  } else {
    const listDeliveries = deliveries.map((delivery, stock_code) => (
      <tr key={stock_code}>
        <td className="c-action">
          <label>
            <input type="checkbox" name="dummy_check" onChange={handleCheck.bind(this, delivery.stock_code)}/>
            <span>選択する</span>
          </label>
        </td>
        <td className="c-l" data-name="銘柄コード">{delivery.stock_code}</td>
        <td className="c-l" data-name="銘柄">{delivery.stock_name}</td>
        <td className="c-l" data-name="区分">{account_types[delivery.account_type]}</td>
        <td className="c-l" data-name="数量">{delivery.quantity}</td>
        <td data-name="取得単価">
          {formatCurrency(delivery.book_unit_price) + `円`}
        </td>
      </tr>
    ));

    return (
      <div className="u-mt20p">
        <table className="c-table_list">
          <thead>
            <tr>
              <th></th>
              <th className="c-l">銘柄コード</th>
              <th className="c-l">銘柄</th>
              <th className="c-l">区分</th>
              <th className="c-l">数量</th>
              <th>取得単価</th>
            </tr>
          </thead>
          <tbody>
            {listDeliveries}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DeliveryCancelList;
