import { createSlice } from "@reduxjs/toolkit";


interface IInitState {
  id: number | null;
}

const initialState: IInitState = {
  id:null
};

const profileReducer = createSlice({
  name: "profile",
  reducers: {
    setProfileId: (state, {payload}) => {
      if (payload.id){
        state.id = payload.id
      }

    },
  },
  initialState,
});

export const {setProfileId} = profileReducer.actions

export default profileReducer.reducer;
