import axios from "axios";
import { LOAD_TRADE_LENDING_BALANCE_SUCCESS } from "../constants/tradeLendingBalance";
import { setHeader } from "./auth";
import { setLoading } from "./loading";
import { removeArrSB } from "../utils";

export const loadTradeLendingBalanceSuccess = (tradeLendingBalance, attributes) => {
  return {
    type: LOAD_TRADE_LENDING_BALANCE_SUCCESS,
    tradeLendingBalance,
    attributes
  };
};

export const loadNameStock = async params => {
  params.field = "NAME";
  const headers = setHeader(params)
  const request = await axios.get(
    `${process.env.REACT_APP_STOCK_MASTER_API_HOST}/masters`,
    headers
  );
  return request.data;
};

export const loadTradeLendingBalanceRequest = params => {
  return dispatch => {
    dispatch(setLoading(true));
    const headers = setHeader(params)
    const request = axios.get(
      `${process.env.REACT_APP_STOCK_LENDING_API_HOST}/v1/productLendingBalances`,
      headers
    );

    return request.then(async response => {
      const data = response.data.data;
      const items = data.items
      const attributes = data.attributes;
      let finalData = [];
      for (let i = 0; i < items.length; ++i) {
        const temp = removeArrSB(
          await loadNameStock({ code: items[i].productCode })
        );
        finalData.push({ ...items[i], name: temp.short_name });
      }
      dispatch(loadTradeLendingBalanceSuccess(finalData, attributes));
      dispatch(setLoading(false));
    });
  };
};
