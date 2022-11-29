import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchInput from "../SearchInput";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import {
  customAppBarStyle,
  toolBarStyles,
  StyledButtonGroup,
  buttonStyles,
} from "./Navbar";
import { Navigate } from "react-router-dom";

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={customAppBarStyle}>
        <Toolbar sx={toolBarStyles}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => navigate("/")}
            sx={{
              display: { xs: "none", sm: "block" },
              height: "23px",
              color: "#1F2839",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "23px",
            }}
          >
            GOMERCE
          </Typography>
          <SearchInput />
          <StyledButtonGroup>
            <Button
              sx={buttonStyles}
              variant="outlined"
              startIcon={<FavoriteBorderIcon />}
            >
              Wishlist
            </Button>
            <Button
              sx={buttonStyles}
              variant="outlined"
              startIcon={<Person3OutlinedIcon />}
            >
              Account
            </Button>
            <Button
              sx={buttonStyles}
              variant="outlined"
              startIcon={<ShoppingCartOutlinedIcon />}
            >
              Cart
            </Button>
          </StyledButtonGroup>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
