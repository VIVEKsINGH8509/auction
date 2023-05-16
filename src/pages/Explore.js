import React from 'react'
import ProductCard from '../components/ProductCard'
import { Box, Typography } from '@mui/material'
import pic from '../assets/auctionLogin.jpg'

const Explore = () => {
  const obj = {
    name: "T-shirt for something",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'T-shirt',
    bid_start_price: '',
    bid_current_price: 1000,
    bid_start_time: '2023-05-17 5:00 pm',
    image: {pic}, 
    verified: true,
  }
  return (
    <Box sx={{backgroundColor: 'primary'}}>
      <Typography variant='h1' color="white">Explore</Typography>
      <ProductCard data={obj} />
    </Box>
  )
}

export default Explore