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
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate();
  return (

    <Box paddingLeft="4rem" paddingTop="4rem" display="flex" alignItems="center" justifyContent='center' gap='3em' sx={{ height: '80vh' }}>
      <Box width="50%" display="flex" flexDirection="column" gap="1.5em">
        <Box display="flex" flexDirection="column" gap="10px">
          <Typography variant="h1" color="extra.main">
            Explore the best collections of products right here.
          </Typography>
          <Typography variant="h4">
            {" "}
            Buy and Sell Products from your home in few clicks.{" "}
          </Typography>
        </Box>
        <Box display="flex" gap="3em">
          <Button variant="contained" size="large">
            <Typography onClick={() => {navigate('/explore')}}>
              Explore
            </Typography>
          </Button>
          <Button variant="contained" size="large" onClick={() => {navigate('/login')}}>
            <Typography>
              BUY/SEll
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
        <img src={imgTwo} width='75%' />
      </Box>
    </Box>

  );
};

export default HeroSection;
