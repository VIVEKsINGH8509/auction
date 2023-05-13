import React from 'react'
import { Box, Typography, Button } from "@mui/material"

const Header = () => {
  return (
    <Box display="flex" alignItems='center' justifyContent='space-between' pt={2} pr={4} pl={1} pb={2}>
      <Box display='flex' flexDirection="row">
        <Typography variant="h2" color="primary">Khareedo</Typography>
        <Typography variant="h2" sx={{ color: "text.light"}}>Becho</Typography>
      </Box>
      <Button variant="contained">Login</Button>
    </Box>
  )
}

export default Header