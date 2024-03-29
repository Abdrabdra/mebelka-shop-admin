import { createSlice } from "@reduxjs/toolkit";

interface IInitState {
  // состояние: нет в бэке
  // marks: number[] | null
  // models: number[] | null

  // cities: number[] | null

  helper: {
    reset: boolean;
    parentCategoryId?: number;
  };

  values: {
    limit: number;
    page: number;

    colors: number[];

    photo?: boolean;
    discount?: boolean;

    cityId?: number;
    categoryId?: number;

    priceTo: string;
    priceFrom: string;
  };
}

const initialState: IInitState = {
  helper: {
    reset: true,
    parentCategoryId: undefined,
  },

  values: {
    page: 1,
    limit: 100,

    colors: [],

    photo: undefined,
    discount: undefined,

    cityId: undefined,
    categoryId: undefined,

    priceFrom: "",
    priceTo: "",
  },
};

const filterPorductSlice = createSlice({
  name: "filterPorducts",
  initialState,
  reducers: {
    setFilterProductHelper: (state, { payload }) => {
      state.helper = { ...state.helper, ...payload };
    },
    setFilterProduct: (state, { payload }) => {
      state.values = { ...state.values, ...payload };
    },
    setFilterProductReset: (state) => {
      state.values = initialState.values;
      state.helper = initialState.helper;
    },
  },
});

export const {
  setFilterProductHelper,
  setFilterProduct,
  setFilterProductReset,
} = filterPorductSlice.actions;

export default filterPorductSlice.reducer;
