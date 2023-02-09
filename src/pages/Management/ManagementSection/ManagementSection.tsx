import React, { useEffect } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

import CityTab from "./CityTab";
import CategoryTab from "./CategoryTab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ManagementSection = () => {
  const location = useLocation();

  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (location.pathname === "/app/management/city") {
      setValue(0);
    }
    if (location.pathname === "/app/management/marka") {
      setValue(1);
    }
    if (location.pathname === "/app/management/model") {
      setValue(2);
    }

    if (location.pathname === "/app/management/body") {
      setValue(3);
    }
    if (location.pathname === "/app/management/generation") {
      setValue(4);
    }
    if (location.pathname === "/app/management/tags") {
      setValue(5);
    }
  }, [location]);

  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "15px",
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
          <Tab
            icon={<SortOutlinedIcon />}
            label="Города"
            onClick={() => navigate("/app/management/city")}
          />
          <Tab
            icon={<PeopleOutlinedIcon />}
            label="Категорий"
            onClick={() => navigate("/app/management/marka")}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <CityTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CategoryTab />
      </TabPanel>
    </Box>
  );
};

export default ManagementSection;
