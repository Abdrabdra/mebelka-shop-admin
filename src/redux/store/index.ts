//library
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

//reducer
import complaint from "./../store/reducers/complaint/complaint.slice";
import user from "./../store/reducers/user/user.slice";
import staff from "./../store/reducers/staff/staff.slice";
import authReducer from "./reducers/auth/auth.slice";
import profile from "./reducers/profile/profile.slice";
import filterReducer from "./reducers/filter/filter.slice";

//rtk
import staffApi from "./rtk-api/staff-rtk/staffApi";
import regionApi from "./rtk-api/region-rtk/regionApi";
import profileApi from "./rtk-api/profile-rtk/profileApi";
import userApi from "./rtk-api/user-rtk/userApi";
import managementApi from "./rtk-api/management-rtk/managementApi";
import cityApi from "./rtk-api/city-rtk/cityApi";
import announcementApi from "./rtk-api/announcement-rtk/announcementApi";
import shopApi from "./rtk-api/shop-rtk/shopApi";

const rootReducer = combineReducers({
  auth: authReducer,
  filter: filterReducer,

  [managementApi.reducerPath]: managementApi.reducer,
  [cityApi.reducerPath]: cityApi.reducer,
  [announcementApi.reducerPath]: announcementApi.reducer,
  [shopApi.reducerPath]: shopApi.reducer,

  [userApi.reducerPath]: userApi.reducer,
  [staffApi.reducerPath]: staffApi.reducer,
  [regionApi.reducerPath]: regionApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,

  complaint,
  staff,
  user,
  profile,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,

      managementApi.middleware,
      cityApi.middleware,
      announcementApi.middleware,
      shopApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
