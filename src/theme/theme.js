import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main:"#0C134F"
    },
    third: {
      main: "#141c44"
    }, 
    text: {
      main: "#5C469C",
      light: "#D4ADFC"
    },
    extra: {
      main: "#ffcc75", 
      light: "#ffe490"
    },
    grey: {
      main: "#a5a0a0"
    }
  }, 
  typography: {
    logo:{
      fontFamily: "'Sigmar', cursive;",
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    logoLarge:{
      fontFamily: "'Sigmar', cursive;",
      fontWeight: 400,
      fontSize: '2.5rem',
    },
    h1: {
      fontWeight: 600,
      fontSize: '3rem',
      fontFamily: "'Vollkorn', serif;",
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      // lineHeight: '2.25rem',
      fontFamily: "'Vollkorn', serif;",
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      // lineHeight: '1.75rem',
      fontFamily: "'Vollkorn', serif;",
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      // lineHeight: '1.6rem',
      fontFamily: "'Vollkorn', serif;",
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.125rem',
      // lineHeight: '1.6rem',
      fontFamily: "'Vollkorn', serif;",
    },
    h6: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.2rem',
      fontFamily: "'Vollkorn', serif;",
    },
    button: {
      fontWeight: 400,
      fontFamily: "'Poppins', sans-serif;",
    },
    body1: {
      fontSize: '0.9rem',
      fontWeight: 400,
      // lineHeight: '1.334rem',
      fontFamily: "'Poppins', sans-serif;",
    },
    body2: {
      fontSize: '0.75rem',
      // letterSpacing: '0rem',
      fontWeight: 400,
      // lineHeight: '1rem',
      fontFamily: "'Poppins', sans-serif;",
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: "'Poppins', sans-serif;",
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      fontFamily: "'Poppins', sans-serif;",
    },
    subheadings: {
      fontSize: '1.2rem',
      fontWeight: 400,
      fontFamily: "'Vollkorn', serif;",
    }
  }
})

export default theme;