import { createSlice } from "@reduxjs/toolkit";

interface IInitState {
  role: string | null;
  marketId?: number;
}

const initialState: IInitState = {
  role: null,
  marketId: undefined,
};

const userSlice = createSlice({
  name: "user/",
  initialState,
  reducers: {
    setRole: (state, { payload }) => {
      state.role = payload;
    },
    setUserMarketId: (state, { payload }) => {
      state.marketId = payload;
    },
  },
});

export const { setRole, setUserMarketId } = userSlice.actions;

export default userSlice.reducer;
