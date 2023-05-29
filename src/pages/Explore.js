import React from "react";
import ProductCard from "../components/ProductCard";
import { Box, Typography } from "@mui/material";
import pic from "../assets/auctionLogin.jpg";
import housetwo from "../assets/housetwo.jpg";
import car from "../assets/cartwo.jpg";
import paintingtwo from "../assets/paintingwo.jpg";
import cloth from "../assets/cloth.jpg"
import shoes from "../assets/shoes.jpg"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Button, Link } from "@mui/material";
import { Scale } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const obj = {
    name: "T-shirt for something",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "T-shirt",
    bid_start_price: "",
    bid_current_price: 1000,
    bid_start_time: "2023-05-17 5:00 pm",
    image: { pic },
    verified: true,
  };


  const navigate = useNavigate();
  const style = {
    transform: "scaleY(0.8)",
  };

  return (
    <Box sx={{ backgroundColor: "primary" }} padding="4rem" width="80vw" display='flex' flexDirection='column'>

      <Typography variant="h1" color="white">
        Explore
      </Typography>

      <Box display="flex" flexDirection="column" gap="3em">

        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={4}
          >
            <Typography variant="h4" color="extra.main">
              Live Bids
            </Typography>
            <Button variant="contained" size="large" onClick={() => navigate('/login')}>
              <Typography color="black">
                More Items
              </Typography>
            </Button>
          </Box>
          <Box display="flex" justifyContent="space-between">
            {/* <Box sx={style}> */}
            <ProductCard data={obj} />
            {/* </Box> */}
            {/* <Box sx={style}> */}
            <ProductCard data={obj} />
            {/* </Box> */}
            {/* <Box sx={style}> */}
            <ProductCard data={obj} />
            {/* </Box> */}
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" gap="2em">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" color="extra.main">
              Category
            </Typography>
            <Button variant="contained" size="large" onClick={() => navigate('/login')}>
              <Typography color="black">
                More Items
              </Typography>
            </Button>
          </Box>
          <Box display="flex" justifyContent="space-between" >
            <Card sx={{ width: 200, height: 200, position: 'relative' }} onClick={() => navigate('/login')}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image={housetwo}
                  alt="house-img"
                />
                <CardContent>
                  <Typography variant="h5" color='extra.main' component="div" textAlign='center'>
                    Appartments
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ width: 200, height: 200, position: 'relative' }} onClick={() => navigate('/login')}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image={car}
                  alt="car-img"
                />
                <CardContent>
                  <Typography variant="h5" color='extra.main' component="div" textAlign='center'>
                    Cars
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ width: 200, height: 200, position: 'relative' }} onClick={() => navigate('/login')}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image={paintingtwo}
                  alt="painting-img"
                />
                <CardContent>
                  <Typography variant="h5" color='extra.main' component="div" textAlign='center'>
                    Paintings
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ width: 200, height: 200, position: 'relative' }} onClick={() => navigate('/login')}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image={cloth}
                  alt="painting-img"
                />
                <CardContent>
                  <Typography variant="h5" color='extra.main' component="div" textAlign='center'>
                    Clothes
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ width: 200, height: 200, position: 'relative' }} onClick={() => navigate('/login')}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image={shoes}
                  alt="painting-img"
                />
                <CardContent>
                  <Typography variant="h5" color='extra.main' component="div" textAlign='center'>
                    Clothes
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>



          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Explore;
