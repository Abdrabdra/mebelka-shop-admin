//library
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

//reducer
import user from "./../store/reducers/user/user.slice";
import staff from "./../store/reducers/staff/staff.slice";
import profile from "./reducers/profile/profile.slice";
import authReducer from "./reducers/auth/auth.slice";
import announceReducer from "./reducers/announce/announce.slice";
import filterProductReducer from "./reducers/filter/filterProduct/filterProduct.slice";

//rtk
import profileApi from "./rtk-api/profile-rtk/profileApi";
import userApi from "./rtk-api/user-rtk/userApi";
import managementApi from "./rtk-api/management-rtk/managementApi";
import cityApi from "./rtk-api/city-rtk/cityApi";
import announcementApi from "./rtk-api/announcement-rtk/announcementApi";
import productApi from "./rtk-api/product-rtk/productApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const AuthPersistConfig = {
  key: "auth",
  storage: storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(AuthPersistConfig, authReducer),
  announce: announceReducer,
  filterProduct: filterProductReducer,

  [managementApi.reducerPath]: managementApi.reducer,
  [cityApi.reducerPath]: cityApi.reducer,
  [announcementApi.reducerPath]: announcementApi.reducer,
  [productApi.reducerPath]: productApi.reducer,

  [userApi.reducerPath]: userApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,

  staff,
  user,
  profile,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,

      managementApi.middleware,
      cityApi.middleware,
      announcementApi.middleware,
      productApi.middleware,
      profileApi.middleware
    ),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
