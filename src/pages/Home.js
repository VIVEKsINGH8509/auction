import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box display='flex' flexDirection='column' gap='5rem'>
    <HeroSection/>
    <Footer/>
    </Box>
    )
}

export default Home