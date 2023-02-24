//library
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//components
import Layout from "../../components/layouts";

//pages
import Profile from "../Profile";

import Management from "../Management";
import Announcement from "../Announcement";
import Order from "../Order";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="profile" />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="announcement/*" element={<Announcement />} />
        <Route path="order/*" element={<Order />} />

        <Route path="announcement/*" element={<Announcement />} />

        <Route path="management/*" element={<Management />} />
      </Route>
    </Routes>
  );
};

export default Main;
