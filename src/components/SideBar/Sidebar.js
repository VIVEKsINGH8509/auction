import React, { useState, useContext } from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, Typography, Button } from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { LPItems } from "./SidebarItems"
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const navigate = useNavigate()
  const [ind, setInd] = useState()
  const [hoverSettings, setHoverSettings] = useState(false)
  const [hoverSign, setHoverSign] = useState(false)
  const [{ currentUser, setCurrentUser }] = useContext(UserContext)
  const onHoverEffect = (i) => {
    setOpenDrawer(true)
    setInd(i)
  }

  // console.log(currentUser)

  const closeHoverEffect = () => {
    setOpenDrawer((false))
    setInd(-1)
  }

  const hoverTwo = (type) => {
    setOpenDrawer(true)
    if (type === "sett") { setHoverSettings(true) }
    else if (type === "sign") { setHoverSign(true) }
  }

  const logout = () => {
    setCurrentUser({
      isLoggedIn: false,
      username: '',
      roles: '',
      accessToken: ''
    })
    localStorage.setItem('stayLoggedIn', 'false')
    localStorage.setItem('userName', '')
    localStorage.setItem('accessToken', '')
    localStorage.setItem('roles', '')

    toast.success('Successfully logged out!')
  }

  const onHoverOut = () => {
    setOpenDrawer(false)
    setInd(-1)
    setHoverSettings(false)
    setHoverSign(false)
  }

  const handleSBIclick = (link) => {
    navigate(link)
  }

  return (
    <Box height="100vh" backgroundColor="transparent" display="flex" position='fixed' zIndex={1200}>
      {/* {openDrawer ? <Box sx={{backgroundColor: 'green', width: '100%', height: '100%', zIndex: 1100, position: 'absolute', top: 0, left: 0 }} onClick={() => closeHoverEffect()} /> : null } */}
      <Box sx={{ zIndex: 1200, height: "100%", backgroundColor: "transparent" }} display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly">
        <Box textAlign="center">
          <Typography variant="logo" color="#fff">kB.com</Typography>
          <Typography variant="subtitle2" color="#fff">khareedoBecho</Typography>
          <Button onClick={() => navigate('/login')} variant="outlined" size="small" sx={{ color: "extra.light", outlineColor: "extra.light", borderColor: "extra.light", "&:hover": { borderColor: "extra.main", color: "extra.main" } }}>Sign In {`>`}</Button>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="90vh">
          <List >
            {LPItems.map((item, index) => {
              return (
                <ListItem key={index} onMouseOver={() => onHoverEffect(index)} onMouseLeave={() => setInd(-1)}>
                  <ListItemButton disableGutters sx={{ "&:hover": { backgroundColor: "transparent", } }} >
                    <ListItemIcon sx={index === ind ? { transform: 'scale(1.2)', color: "#fff" } : { color: "grey.main" }} onClick={() => handleSBIclick(item.link)}>
                      {item.icon}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box visibility={currentUser.isLoggedIn ? 'visible' : 'hidden'}>
          <List >
            <ListItem onMouseOver={() => hoverTwo('sett')} onMouseLeave={() => setHoverSettings(false)}>
              <ListItemButton disableGutters sx={{ "&:hover": { backgroundColor: "transparent", } }} >
                <ListItemIcon sx={hoverSettings ? { transform: 'scale(1.2)', color: "#fff" } : { color: "grey.main" }}>
                  <SettingsIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem onMouseOver={() => hoverTwo('sign')} onMouseLeave={() => setHoverSign(false)}>
              <ListItemButton disableGutters sx={{ "&:hover": { backgroundColor: "transparent", } }} >
                <ListItemIcon sx={hoverSign ? { transform: 'scale(1.2)', color: "#fff" } : { color: "grey.main" }} onClick={() => logout()}>
                  {currentUser.isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>

      {openDrawer ? <Box sx={{ zIndex: 1200, height: "100%", width: "100%" }} display="flex" flexDirection="column" onClick={() => closeHoverEffect()}>
        <Box textAlign="center" visibility="hidden">
          <Typography variant="logo" color="#fff">kB.com</Typography>
          <Typography variant="subtitle2" color="#fff">khareedoBecho</Typography>
          <Button variant="outlined" size="small" sx={{ color: "extra.light", outlineColor: "extra.light", borderColor: "extra.light", "&:hover": { borderColor: "extra.main", color: "extra.main" } }}>Sign In {`>`}</Button>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" height="90vh" maxWidth="12vw"
          sx={{ background: 'linear-gradient(90deg, rgba(18,18,18,0.9) 77%, rgba(255,255,255,0) 100%)' }}
        >
          <List >
            {LPItems.map((item, index) => {
              return (
                <ListItem key={index} onMouseOver={() => onHoverEffect(index)} onMouseLeave={() => onHoverOut()}>
                  <ListItemButton disableGutters sx={{ "&:hover": { backgroundColor: "transparent", } }} >
                    <ListItemIcon sx={index === ind ? { transform: 'scale(1.2)', color: "#fff" } : { color: "grey.main" }} onClick={() => handleSBIclick(item.link)}>
                      {item.title}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box visibility={currentUser.isLoggedIn ? 'visible' : 'hidden'} maxWidth="12vw"
          sx={{ background: 'linear-gradient(90deg, rgba(18,18,18,0.9) 77%, rgba(255,255,255,0) 100%)' }}
        >
          <List >
            <ListItem onMouseOver={() => hoverTwo('sett')} onMouseLeave={() => onHoverOut()}>
              <ListItemButton disableGutters sx={{ "&:hover": { backgroundColor: "transparent", } }} >
                <ListItemIcon sx={hoverSettings ? { transform: 'scale(1.2)', color: "#fff" } : { color: "grey.main" }}>
                  Settings
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem onMouseOver={() => hoverTwo('sign')} onMouseLeave={() => onHoverOut()}>
              <ListItemButton disableGutters sx={{ "&:hover": { backgroundColor: "transparent", } }} >
                <ListItemIcon sx={hoverSign ? { transform: 'scale(1.2)', color: "#fff" } : { color: "grey.main" }} onClick={() => logout()}>
                  {currentUser.isLoggedIn ? `Logout` : `Login`}
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