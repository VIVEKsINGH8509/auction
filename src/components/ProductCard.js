import React, { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, Box, Typography, Stack, Button } from '@mui/material'
import pic from '../assets/auctionLogin.jpg'
import VerifiedIcon from '@mui/icons-material/Verified';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import moment from 'moment'
import CountDown from 'react-countdown'

const ProductCard = ({ data }) => {
  const [isBidLive, setIsBidLive] = useState()
  const [liveOn, setLiveOn] = useState()

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      setIsBidLive(true)
    }  else {
      // Render a countdown
      return (
        <span>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      );
    }
  }

  useEffect(() => {
    const dateToday = new Date()
    console.log(moment(dateToday).diff(moment(data.bid_start_time)))
    if (moment(dateToday).diff(moment(data.bid_start_time)) < 0) {
      setIsBidLive(false)
      setLiveOn(Math.abs(moment(dateToday).diff(moment(data.bid_start_time))))
      console.log(Math.abs(moment(dateToday).diff(moment(data.bid_start_time))))
    }
  }, [])

  console.log(liveOn, 'Live on')
  return (
    <Card sx={{ height: '425px', width: "300px", position: 'relative' }}>
      {isBidLive ? null : <Box sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'grey.main', opacity: '.65', zIndex: 30 }}></Box>}
      <Box position='relative' sx={{ height: '300px', width: '100%' }}>
        <CardMedia sx={{ position: 'absolute', top: 0, left: 0, height: '300px', width: '100%' }} image={pic} component='img' />
        <Box display="flex" flexDirection="Column" justifyContent="space-between" sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse', width: '100%', paddingRight: '0.5rem', paddingTop: '0.5rem' }}>
            <VerifiedIcon sx={data.verified ? { color: 'success.main' } : { visibility: 'hidden' }} />
          </Box>
          <Box position='relative' sx={{ height: '40px', width: '100%' }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, height: "100%", width: '100%', backgroundColor: "extra.light", opacity: '0.375', filter: 'blur(1px)' }}></Box>
            <Box sx={{ position: 'absolute', top: 0, left: 0, height: "100%", width: '100%', padding: '0.6rem' }}>
              {isBidLive ?
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'rem' }}>
                  <WhatshotIcon sx={{ color: 'error.main' }} />
                  <Typography>Bid is Live</Typography>
                </Box> :
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'}}>
                  <Typography>Bid Live in </Typography>
                  <Typography>
                    <CountDown
                      date={Date.now() + Math.abs(moment(new Date()).diff(moment(data.bid_start_time)))}
                      renderer={renderer}
                    />
                  </Typography>
                </Box>
              }
            </Box>
          </Box>
        </Box>
      </Box>
      <CardContent>
        <Stack>
          <Box display='flex' justifyContent='space-between'>
            <Stack>
              <Typography>{data.name}</Typography>
              <Typography>{data.type}</Typography>
            </Stack>
            <Stack>
              <Typography>Current Bid:</Typography>
              <Typography>{data.bid_start_price ? data.bid_start_price : data.bid_current_price}</Typography>
            </Stack>
          </Box>
          <Box mt={2}>
            <Button sx={{ width: '100%' }} variant='contained'>Place Bid</Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default ProductCard