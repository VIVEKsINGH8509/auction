import React from "react";
import ProductCard from "./ProductCard";
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
import img from '../assets/shoppingImg.svg'
import imgTwo from '../assets/imgshop.svg'

const HeroSection = () => {
  return (
    <>
      <Box paddingLeft="4rem" paddingTop="4rem" display="flex" gap='3em'>
        <Box width="50%" display="flex" flexDirection="column" gap="2.5em">
          <Box>
            <Box display="flex" flexDirection="column" gap="18px">
              <Typography variant="h1" color="extra.main">
                Explore the best collections of products right here.
              </Typography>
              <Typography variant="h4">
                {" "}
                Buy and Sell Products from your home in few clicks.{" "}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" gap="3em">
            <Button variant="contained" size="large">
              <Typography color="extra.main">
                <Link
                  to="/signup"
                  //   color="extra.main"
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  Explore
                </Link>
              </Typography>
            </Button>
            <Button variant="contained" size="large">
              <Typography>
                <Link
                  to="/signup"
                  //   color="black"
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  Buy/Sell
                </Link>
              </Typography>
            </Button>
          </Box>
          <Box display="flex" gap="2em">
            <Box>
              <Typography variant="h4" display="flex" alignItems="center">
                <CountUp end={10000} />+
              </Typography>
              <Typography>
                {/* <CountUp end={10000} /> */}
                Products
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" display="flex" alignItems="center">
                <CountUp end={1000} />+
              </Typography>
              <Typography>
                {/* <CountUp end={10000} /> */}
                Buyers
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" display="flex" alignItems="center">
                <CountUp end={1000} />+
              </Typography>
              <Typography>
                {/* <CountUp end={10000} /> */}
                Sellers
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box display="flex">
          <img src={imgTwo} width='75%'/>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
