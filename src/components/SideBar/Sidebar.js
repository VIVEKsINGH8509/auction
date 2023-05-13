import React from 'react'
import { Box, Stack } from "@mui/material"
import ExploreIcon from '@mui/icons-material/Explore';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" px={1} py={2} width="4%" height="88vh" backgroundColor="third.main" position="fixed" borderRadius={2} mb={2}>
      <Stack gap={2}>
        <ExploreIcon fontSize="large" sx={{color:"primary.main"}} onMouseOver={()=>alert("Its working")}/>
        <LoginIcon  fontSize="large" sx={{color:"primary.main"}}/>
      </Stack>
      <Stack gap={2} sx={{borderTop: "2px solid white"}}>
        <SettingsIcon fontSize="large" sx={{color:"primary.main"}}/>
        <LogoutIcon fontSize="large" sx={{color:"primary.main"}} />
      </Stack>
    </Box>
  )
}

export default Sidebar