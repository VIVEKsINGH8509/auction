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
import { Link } from "@mui/material";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <>
      <Box>
        <Box width="50%" display="flex" flexDirection="column" gap="1.5em">
          <Box>
            <Box display="flex" flexDirection="column" gap="10px">
              <Typography variant="h4" color="extra.main">
                Explore the best collections of products right here.
              </Typography>
              <Typography variant="subtitle1">
                {" "}
                Buy and Sell Products from your home in few clicks.{" "}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button>
              <Typography color="extra.main">
                <Link
                  to="/signup"
                  color="extra.main"
                  sx={{ textDecoration: "none" }}
                >
                  Explore
                </Link>
              </Typography>
            </Button>
            <Button>
              <Typography>
                <Link
                  to="/signup"
                  color="extra.main"
                  sx={{ textDecoration: "none" }}
                >
                  Buy/Sell
                </Link>
              </Typography>
            </Button>
          </Box>
          <Box display='flex' gap='2em'>
            <Box>
              <Typography variant="h4" display='flex' alignItems='center'>
                <CountUp end={10000} />+
              </Typography>
              <Typography>
                {/* <CountUp end={10000} /> */}
                Products
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" display='flex' alignItems='center'>
                <CountUp end={1000} />+
              </Typography>
              <Typography>
                {/* <CountUp end={10000} /> */}
                Buyers
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" display='flex' alignItems='center'>
                <CountUp end={1000} />+
              </Typography>
              <Typography>
                {/* <CountUp end={10000} /> */}
                Sellers
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box></Box>
      </Box>
    </>
  );
};

export default HeroSection;
