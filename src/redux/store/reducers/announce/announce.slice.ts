import { createSlice } from "@reduxjs/toolkit";

interface IInitState {
  isSelected: {
    parentCategory: boolean;
  };
  values: {
    file: File[];

    title: string;
    price: number;
    categoryId?: number;
    colors: string[];
    length: number;
    width: number;
    height: number;
    frames: string[];
    decorId?: number;
    liftingMechanism: boolean;
    laundryBoxes: boolean;
    production: string;
    cityId?: number;
    discount: number;

    marketId?: number;
  };
}

const initialState: IInitState = {
  isSelected: {
    parentCategory: false,
  },
  values: {
    file: [],

    title: "",
    price: 0,
    categoryId: undefined,
    colors: [],
    length: 0,
    width: 0,
    height: 0,
    frames: [],
    decorId: undefined,
    liftingMechanism: false,
    laundryBoxes: false,
    production: "",
    cityId: undefined,
    discount: 0,

    marketId: undefined,
  },
};

const announceSlice = createSlice({
  name: "announce",
  initialState,
  reducers: {
    setIsSelected: (state, { payload }) => {
      state.isSelected = { ...state.isSelected, ...payload };
    },
    setAnnounce: (state, { payload }) => {
      state.values = { ...state.values, ...payload };
    },

    announceReset: (state) => {
      state.values = initialState.values;
    },
  },
});

export const { setIsSelected, setAnnounce, announceReset } =
  announceSlice.actions;

export default announceSlice.reducer;
