//library
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useGetRoleQuery } from "../../redux/store/rtk-api/user-rtk/userEndpoints";
import { useDispatch } from "react-redux";
import { setRole } from "../../redux/store/reducers/user/user.slice";

//components
import Layout from "../../components/layouts";

//pages
import Profile from "../Profile";
import Users from "../Users";

import Management from "../Management";
import Announcement from "../Announcement";
import Order from "../Order";
import Shop from "../Shop";

const Main = () => {
  // debugger
  const { data: role, isLoading, isError, refetch } = useGetRoleQuery("");
  const dispatch = useDispatch();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="profile" />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="announcement/*" element={<Announcement />} />
          <Route path="order/*" element={<Order />} />
          <Route path="user/*" element={<Users />} />
          <Route path="shop/*" element={<Shop />} />

          <Route path="announcement/*" element={<Announcement />} />

          <Route path="management/*" element={<Management />} />
        </Route>
      </Routes>
    </>
  );
};

export default Main;
