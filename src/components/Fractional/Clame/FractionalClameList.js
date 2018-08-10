import React from 'react';
import { formatCurrency } from '../../../utils';
import { account_types, bookUnitPrice } from '../common';

const FractionalClameList = ({fractionals, handleCheck}) => {
  if (fractionals.length === 0) return null;

  const listFractionals = fractionals.map((fractional, stock_code) => (
    <tr key={stock_code}>
      <td className="c-action">
        <label>
          <input type="checkbox" name="dummy_check" onChange={handleCheck.bind(this, fractional.stock_code, fractional.quantity)} />
          <span>選択する</span>
        </label>
      </td>
      <td className="c-l" data-name="銘柄コード">
        {fractional.stock_code}
      </td>
      <td className="c-l" data-name="銘柄">{fractional.stock_name}</td>
      <td className="c-l" data-name="区分">{account_types[fractional.account_type]}</td>
      <td className="c-display_label_sp" data-name="数量">
        <div className="p-form-object_stock">
          <input className="dummy_text" type="text" value={formatCurrency(fractional.quantity)}  placeholder="数値を入力してください" disabled />
          <span className="p-unit">株</span>
        </div>
      </td>
      <td data-name="取得単価">
        {bookUnitPrice(fractional)}
        <span className="p-unit">円</span>
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
          <th>数量</th>
          <th>取得単価</th>
        </tr>
      </thead>
      <tbody>
        {listFractionals}
      </tbody>
    </table>
  );
}

export default FractionalClameList;
