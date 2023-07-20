import { createSlice } from "@reduxjs/toolkit";
import { IImages } from "../../../../types/Announcement/IOneAnnouncement";

interface IInitState {
  isSelected: {
    parentCategory: boolean;
    lvl2Category: boolean;
  };
  values: {
    file: File[];
    serverFile: IImages[];

    title: string;
    price: number;
    categoryId?: number;
    lvl2Category?: number;
    lvl3Category?: number;
    colors: number[];
    length: number;
    width: number;
    height: number;
    frames: number[];
    decorId?: number;
    liftingMechanism: boolean;
    laundryBoxes: boolean;
    production: string;
    cityId?: number;
    discount: number;
    description: string;

    marketId?: number;
  };
}

const initialState: IInitState = {
  isSelected: {
    parentCategory: false,
    lvl2Category: false,
  },
  values: {
    file: [],
    serverFile: [],

    title: "",
    price: 0,
    categoryId: undefined,
    lvl2Category: undefined,
    lvl3Category: undefined,
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
    description: "",

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
    setAnnounceColor: (state, { payload }) => {
      state.values.colors = payload.arr;
    },

    announceReset: (state) => {
      state.values = initialState.values;
    },
  },
});

export const { setIsSelected, setAnnounce, setAnnounceColor, announceReset } =
  announceSlice.actions;

export default announceSlice.reducer;
