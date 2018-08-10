import React from 'react';
import { formatCurrency } from '../../../utils';
import { account_types, request_types, bookUnitPrice } from '../common';

const FractionalCancelList = ({fractionals, handleCheck}) => {
  if (fractionals.length === 0) return null;

  const listFractionals = fractionals.map((fractional, stock_code) => (
    <tr key={stock_code}>
      <td className="c-action">
        <label>
          <input type="checkbox" name="dummy_check" onChange={handleCheck.bind(this, fractional.stock_code)}/>
          <span>選択する</span>
        </label>
      </td>
      <td className="c-l" data-name="銘柄コード">
        {fractional.stock_code}
      </td>
      <td className="c-l" data-name="銘柄">{fractional.stock_name}</td>
      <td className="c-l" data-name="区分">
        {account_types[fractional.account_type]}
      </td>
      <td className="c-l" data-name="数量">
        {formatCurrency(fractional.quantity)}
      </td>
      <td data-name="取得単価">
        {bookUnitPrice(fractional) + `円`}
      </td>
      <td className="c-l" data-name="方法">
        {request_types[fractional.request_type]}
      </td>
    </tr>
  ));

  return (
    <table className="c-table_list">
      <thead>
        <tr>
          <th></th>
          <th className="c-l">銘柄コード</th>
          <th className="c-l">銘柄</th>
          <th className="c-l">区分</th>
          <th className="c-l">数量</th>
          <th>取得単価</th>
          <th className="c-l">方法</th>
        </tr>
      </thead>
      <tbody>
        {listFractionals}
      </tbody>
    </table>
  );
}

export default FractionalCancelList;
