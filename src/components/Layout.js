import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './SideBar/Sidebar'

import React from 'react'

const Layout = () => {
  return (
  <>
    <Header />
    <Box display="flex" pl={1}>
      <Sidebar />
      <Box>
        <Outlet />
        <Footer />
      </Box>
    </Box>
  </>
)}

export default Layout