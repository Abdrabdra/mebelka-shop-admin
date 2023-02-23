import { createSlice } from "@reduxjs/toolkit";

interface IInitState {
  // состояние: нет в бэке
  // marks: number[] | null
  // models: number[] | null

  // cities: number[] | null

  helper: {
    reset: boolean;
  };

  values: {
    limit: number;
    page: number;

    // marks: number[];
    // models: number[];

    // yearTo: string;
    // yearFrom: string;
    // orderByPriceASC: string;
    // orderByPriceDESC: string;
    // priceTo: string;
    // priceFrom: string;
  };
}

const initialState: IInitState = {
  // состояние: нет в бэке
  // models: null,
  // marks: null,
  // cities: null,

  helper: {
    reset: true,
  },

  values: {
    limit: 5,
    page: 1,

    // marks: [],
    // models: [],

    // yearFrom: "",
    // yearTo: "",
    // orderByPriceASC: "",
    // orderByPriceDESC: "",
    // priceFrom: "",
    // priceTo: "",
  },
};

const filterPorductSlice = createSlice({
  name: "filterPorducts",
  initialState,
  reducers: {
    setFilterProduct: (state, { payload }) => {
      state.values = { ...state.values, ...payload };
    },
    setFilterProductReset: (state) => {
      state.values = initialState.values;
    },
  },
});

export const { setFilterProduct, setFilterProductReset } = filterPorductSlice.actions;

export default filterPorductSlice.reducer;
