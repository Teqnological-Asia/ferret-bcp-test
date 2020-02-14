import axios from "axios";
import { LOAD_TRADE_LENDING_HISTORIES_SUCCESS } from "../constants/tradeLendingHistory";
import { setHeader } from "./auth";
import { setLoading } from "../actions/loading";
import { loadNameStock } from "./tradeLendingBalance";
import { removeArrSB } from "../utils";
export const loadTradeLendingHistoriesSuccess = (
  tradeLendingHistories,
  pageSize,
  currentPage,
  totalPages
) => {
  return {
    type: LOAD_TRADE_LENDING_HISTORIES_SUCCESS,
    tradeLendingHistories,
    pageSize,
    currentPage,
    totalPages
  };
};

export const loadTradeLendingHistoriesRequest = params => {
  return dispatch => {
    dispatch(setLoading(true));
    const headers = setHeader(params);
    const request = axios.get(
      `${process.env.REACT_APP_STOCK_LENDING_API_HOST}/v1/productLendingTrades`,
      headers
    );

    return request.then(async response => {
      const data = response.data.data;
      const attributes = data.attributes;
      const items = data.items;
      let finalData = [];
      for (let i = 0; i < items.length; ++i) {
        const temp = removeArrSB(
          await loadNameStock({ code: items[i].productCode })
        );
        finalData.push({ ...items[i], stock_name: temp.short_name });
      }
      dispatch(
        loadTradeLendingHistoriesSuccess(
          finalData,
          attributes.pageSize,
          attributes.page,
          attributes.totalPages
        )
      );
      dispatch(setLoading(false));
    });
  };
};
