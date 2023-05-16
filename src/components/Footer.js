import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Button,
  ListItemText,
  ListSubheader,
  Stack,
  Paper,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ExploreIcon from "@mui/icons-material/Explore";

// KhareedoBecho.com
// A convenient and exciting way to buy and sell goods online. Bid on a variety of items and get great deals with just a few clicks.

// Links to Explore page, login/signup page, About page

// Features: Category Clothes, Top Products, Hot Bids(LIVE bids)

//social media wale icons do teen

// For design refer https://dribbble.com/shots/18282421-NFT-Marketplace-Website/attachments/13489479?mode=media

const Footer = () => {
  return (
    <Paper style={{padding:'25px'}}>
      <Box display="flex" flexDirection="column" gap="1em">
        <Typography variant="h4" color="#fff">
          KhareedoBecho
        </Typography>
        <Typography variant="subtitle1" color="#fff" width="50%">
          {" "}
          A convenient and exciting way to buy and sell goods online. Bid on a
          variety of items and get great deals with just a few clicks.
        </Typography>
      </Box>
      {/* <Box display="flex">
        <Button>Explore</Button>
        <Button>Sign Up</Button>
        <Button>About</Button>
      </Box> */}

      <Box display="flex" gap="15rem" marginTop='2rem'>
        <Box>
          <ListSubheader
            disableGutters
            style={{ background: "none"}}
          >
            <Typography color="extra.main">FEATURES</Typography>
          </ListSubheader>
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemText primary="Category Clothes" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Top Products" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Hot Bids(LIVE Bids)" />
            </ListItem>
          </List>
        </Box>
        <Box>
          <ListSubheader
            // disableGutters
            style={{ background: "none"}}
          >
            <Typography color="extra.main">Go To</Typography>
          </ListSubheader>
          <List disablePadding component={Stack}>
            <ListItem disablePadding>
              <ListItemButton>Explore</ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>Sign Up</ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>About</ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box>
          <ListSubheader style={{ background: "none" }}>
            <Typography color="extra.main">OUR SOCIAL</Typography>
          </ListSubheader>
          <List component={Stack} direction="row" disablePadding width="20%">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InstagramIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TwitterIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FacebookIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Paper>
  );
};

export default Footer;
