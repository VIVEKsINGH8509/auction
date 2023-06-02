import React from "react";
import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  // Button,
  // ListItemText,
  // ListSubheader,
  Stack,
  Paper,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{ backgroundColor: "primary" }}
      padding="3rem"
      display="flex"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ width: "50%", height: "80vh" }}
      >
        <Box display="flex" flexDirection="column" gap="10px">
          <Typography color="extra.main" variant="h3">
            Need Help?
          </Typography>
          <Typography color="#fff" variant="body1">
            Fill up the Form and our Team will get back to you within 24 hours.
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" gap="1rem">
          <Box display="flex" alignItems="center" gap="5px">
            <PhoneIcon />
            <Typography color="#fff" variant="body1">
              +91 8087350531
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="5px">
            <EmailIcon />
            <Typography color="#fff" variant="body1">
              khareedobecho@gmail.com
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="5px">
            <LocationOnIcon />
            <Typography color="#fff" variant="body1">
              KhareedoBecho, Budhwar Peth Road, Pune, Maharashtra 411002
            </Typography>
          </Box>
        </Box>
        <Box>
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

      <Paper sx={{ width: "50%" }}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          padding="3rem"
          justifyContent="space-between"
        >
          <Box display="flex" flexDirection="column" gap="2rem">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Mail" variant="outlined" />
            <TextField id="outlined-basic" label="Message" variant="outlined" />
          </Box>

          <Button
            variant="contained"
            size="large"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Typography color="black">Submit</Typography>
          </Button>
        </Box>
      </Paper>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Your message has been Sent!"
        // action={action}
      />
    </Box>
  );
};

export default Contact;
