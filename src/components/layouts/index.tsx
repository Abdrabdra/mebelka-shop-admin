// library
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";

//components

import { LayoutContainer } from "./style";
import DrawerAdmin from "../drawer/DrawerAdmin";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <DrawerAdmin />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </Box>
  );
};

export default Layout;
