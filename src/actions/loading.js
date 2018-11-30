import { SET_LOADING } from "../constants/loading";

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  isLoading
})