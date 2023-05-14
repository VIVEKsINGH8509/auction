import React, { useState } from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, Typography, Button, ListItemText } from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { LPItems } from "./SidebarItems"



const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [ind, setInd] = useState()
  const [hoverSettings, setHoverSettings] = useState(false)
  const [hoverSign, setHoverSign] = useState(false)
  const onHoverEffect = (i) => {
    setOpenDrawer(true)
    setInd(i) 
  }

  const closeHoverEffect = () => {
    setOpenDrawer((false))
    setInd(-1)
  }

  const hoverTwo = (type) => {
    setOpenDrawer(true)
    if (type === "sett") { setHoverSettings(true)}
    else if (type === "sign") { setHoverSign(true)}
  }

  return (
    <Box height="100vh" backgroundColor="transparent" display="flex" >
      
      <Box sx={{ zIndex: 1200, height: "100%", backgroundColor: "transparent" }} display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly">
        <Box textAlign="center">
          <Typography variant="logo" color="#fff">kB.com</Typography>
          <Typography variant="subtitle2" color="#fff">khareedoBecho</Typography>
          <Button variant="outlined" size="small" sx={{ color: "extra.light", outlineColor: "extra.light", borderColor: "extra.light", "&:hover": { borderColor: "extra.main", color: "extra.main" } }}>Sign In {`>`}</Button>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="90vh">
          <List >
            {LPItems.map((item, index) => {
              return (
                <ListItem key={index} onMouseOver={() => onHoverEffect(index)} onMouseLeave={() => setInd(-1)}>
                  <ListItemButton disableGutters sx={{ "&:hover": { backgroundColor: "transparent", } }} >
                    <ListItemIcon sx={index === ind ? { transform: 'scale(1.2)', color: "#fff" } : { color: "grey.main" }} disablePadding disableGutters >
                      {item.icon}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box visibility={isLoggedIn ? 'visible' : 'hidden'}>
          <List >
            <ListItem onMouseOver={() => hoverTwo('sett')} onMouseLeave={() => setHoverSettings(false)}>
              <ListItemButton disableGutters sx={{ "&:hover": { backgroundColor: "transparent", } }} >
                <ListItemIcon sx={hoverSettings  ? { transform: 'scale(1.2)', color: "#fff" } : { color: "grey.main" }}>
                  <SettingsIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem onMouseOver={() => hoverTwo('sign')} onMouseLeave={() => setHoverSign(false)}>
              <ListItemButton disableGutters sx={{ "&:hover": { backgroundColor: "transparent", } }} >
                <ListItemIcon sx={hoverSign  ? { transform: 'scale(1.2)', color: "#fff" } : { color: "grey.main" }}>
                { isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>

      {openDrawer ? <Box sx={{ zIndex: 1200 , height: "100%", backgroundColor: "transparent", width: "100%" }} display="flex" flexDirection="column" onClick={() => closeHoverEffect()}>
        <Box textAlign="center" visibility="hidden">
          <Typography variant="logo" color="#fff">kB.com</Typography>
          <Typography variant="subtitle2" color="#fff">khareedoBecho</Typography>
          <Button variant="outlined" size="small" sx={{ color: "extra.light", outlineColor: "extra.light", borderColor: "extra.light", "&:hover": { borderColor: "extra.main", color: "extra.main" } }}>Sign In {`>`}</Button>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" height="90vh"  maxWidth="12vw">
          <List >
            {LPItems.map((item, index) => {
              return (
                <ListItem key={index} onMouseOver={() => onHoverEffect(index)} onMouseLeave={() => setInd(-1)}>
                  <ListItemButton disableGutters  sx={{ "&:hover": { backgroundColor: "transparent", } }} >
                    <ListItemIcon sx={index === ind ? { transform: 'scale(1.2)', color: "#fff" } : { color: "grey.main" }} >
                      {item.title}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box visibility={isLoggedIn ? 'visible' : 'hidden'}>
          <List >
            <ListItem onMouseOver={() => hoverTwo('sett')} onMouseLeave={() => setHoverSettings(false)}>
              <ListItemButton disableGutters sx={{ "&:hover": { backgroundColor: "transparent", } }} >
                <ListItemIcon sx={hoverSettings  ? { transform: 'scale(1.2)', color: "#fff" } : { color: "grey.main" }}>
                  Settings
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem onMouseOver={() => hoverTwo('sign')} onMouseLeave={() => setHoverSign(false)}>
              <ListItemButton disableGutters sx={{ "&:hover": { backgroundColor: "transparent", } }} >
                <ListItemIcon sx={hoverSign  ? { transform: 'scale(1.2)', color: "#fff" } : { color: "grey.main" }}>
                  { isLoggedIn ? `Logout` : `Login`}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box> : null}

    </Box>
  )
}

export default Sidebar