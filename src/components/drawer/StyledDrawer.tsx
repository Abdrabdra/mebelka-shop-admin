// library
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink, NavLinkProps } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const StyledBox = (props: any) => (
  <Box
    sx={{
      backgroundColor: "primary.main",
      width: "40px",
      height: "40px",
      borderRadius: "10px",
      mr: "25px",
    }}
    {...props}
  />
);

// Components For List
export const StyledNavLink = (props: NavLinkProps) => (
  <NavLink
    style={({ isActive }) => {
      return {
        color: isActive ? "black" : "primary.main",
        fontWeight: isActive ? "600" : "400",
        height: "30px",
        p: 0,
        textDecorationLine: "none",
      };
    }}
    {...props}
  />
);
export const StyledListItem = (props: any) => (
  <ListItem
    button
    sx={{
      height: "50px",
      mb: "10px",
      p: 0,
      pl: "20px",

      fontSize: "18px",
      textDecorationLine: "none",
      color: "primary.main",
    }}
    {...props}
  />
);
export const StyledListItemIcon = (props: any) => (
  <ListItemIcon sx={{ display: "flex", justifyContent: "center", color: "primary.main" }} {...props} />
);
export const StyledItemText = (props: any) => (
  <Typography
    sx={{
      fontSize: "18px",
      textDecorationLine: "none",
      color: "primary.main",
    }}
    {...props}
  />
);
