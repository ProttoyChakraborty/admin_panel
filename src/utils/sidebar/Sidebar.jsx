import React from "react";
import "./sidebar.scss";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import { Link } from "react-router-dom";
// icons import
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CategoryIcon from "@mui/icons-material/Category";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="top">
      <Link to="/" style={{textDecoration:"none" ,color: "white"}}>
        <div className="logo">
          <span>
            <h1>Admin</h1>
          </span>
          </div>
          </Link>
      </div>
      <div className="middle">
        <ul>
          <li>
            Main
            <ul>
            <Link to="/" style={{textDecoration:"none" ,color: "white"}}>
              <li className="sidebarElement">
                <span>
                  <DashboardIcon />
                </span>
                Dashboard
                </li>
              </Link>
            </ul>
          </li>
          <li>
            Lists
            <ul>
              <Link to="/users" style={{textDecoration:"none" ,color: "white"}}>
                <li className="sidebarElement">
                  <span>
                    <PeopleAltIcon />
                  </span>
                  Users
                </li>
              </Link>
              <Link to="/products" style={{textDecoration:"none" ,color: "white"}}>
              <li className="sidebarElement">
                <span>
                  <ListAltIcon />
                </span>
                Products
              </li>
              </Link>
              <li className="sidebarElement">
                <span>
                  <CategoryIcon />
                </span>
                Orders
              </li>
              <li className="sidebarElement">
                <span>
                  <LocalShippingIcon />
                </span>
                Delivery
              </li>
            </ul>
          </li>
          <li>
            Utilities
            <ul>
              <li className="sidebarElement">
                <span>
                  <QueryStatsIcon />
                </span>
                Stats
              </li>
              <li className="sidebarElement">
                <span>
                  <NotificationsActiveIcon />
                </span>
                Notifications
              </li>
            </ul>
          </li>
          <li>
            Services
            <ul>
              <li className="sidebarElement">
                <span>
                  <DriveFileRenameOutlineIcon />
                </span>
                Logs
              </li>
              <li className="sidebarElement">
                <span>
                  <SettingsIcon />
                </span>
                Settings
              </li>
            </ul>
          </li>
          <li>
            User
            <ul>
              <li className="sidebarElement">
                <span>
                  <AccountBoxIcon />
                </span>
                Profile
              </li>
              <li className="sidebarElement">
                <span>
                  <LogoutIcon />
                </span>
                Logout
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <h2>Dark Mode</h2>
        <div>
          <FormGroup>
            <FormControlLabel control={<Switch color="secondary" />} />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
