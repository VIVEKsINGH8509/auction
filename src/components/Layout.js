import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./Footer";
import Sidebar from "./SideBar/Sidebar";

import React from "react";
import HeroSection from "./HeroSection";

const Layout = () => {
  return (
  <>
    <Box position="relative">
      <Sidebar position="sticky" top={0} left={0} zIndex="100" />
      <Box position='absolute' sx={{top: 0, left: 0, paddingLeft: '8rem', width: '100%'}}>
        <Outlet />
      </Box>
      </Box>
    </>
  );
};

export default Layout;
