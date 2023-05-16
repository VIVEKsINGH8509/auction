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
        <Box display='flex' gap='1.5em'>
        <Sidebar position="sticky" top={0} left={0} zIndex="100" />
        <HeroSection />
        </Box>
        <Footer />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
