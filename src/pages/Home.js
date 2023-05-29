import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Box display='flex' flexDirection='column' gap='5rem'>
    <HeroSection/>
    <Footer/>
    {/* <Button onClick={() => navigate('/addProduct')}>Add Product Bsdk</Button> */}
    </Box>
    )
}

export default Home