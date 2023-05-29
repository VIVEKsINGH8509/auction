import React, { useState, useContext } from 'react'
import { Box, Typography, TextField, Divider, Card, Stack, CardHeader, CardContent, InputAdornment, IconButton, Button } from "@mui/material"
import pic from '../assets/auctionLogin.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik'
import * as yup from 'yup'

import { UserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [toggle, setToggle] = useState(true)
  const [showPassword, setShowPassword] = useState(false);
  
  const [{setCurrentUser}] = useContext(UserContext)
  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validationSchemaSignUp = yup.object({
    email: yup
      .string('Enter your username')
      .required('Username is required'),
    username: yup
      .string('Enter your username')
      .required('Username is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  });

  const formikSu = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: validationSchemaSignUp,
    onSubmit: async (values) => {
      const signupCreds = {
        ...formikSu.values,
        email: formikSu.values.email,
        username: formikSu.values.username,
        password: formikSu.values.password,
      }
      try {
        const { data } = await axios.post("http://localhost:8088/users", signupCreds)
        console.log(data)
        setToggle(!toggle)
        toast.success('Sign Up Successfull. Please Login to Continue')
        if (data) {
          console.log(data)
        }
      } catch (error) {
        console.log(error.response.status)
        if (error.response.status === 409) {
          console.log('reaching here')
          toast.error('User with same credentials Exists')
        }
      }
    },
  });

  const validationSchemaSignIn = yup.object({
    username: yup
      .string('Enter your username')
      .required('Username is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  });

  const formikSi = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchemaSignIn,
    onSubmit: async (values) => {
      console.log('reaching here')
      const loginCreds = {
        ...formikSi.values,
        username: formikSi.values.username,
        password: formikSi.values.password,
        roles: formikSi.values.username === 'admin' ? 'admin' : 'user'
      }
      try {
        const { data } = await axios.post("http://localhost:8088/auth/login", loginCreds)
        console.log(data)
        setCurrentUser({username: data.username, isLoggedIn: true, accessToken: data.accessToken, roles: data.roles, uid: data.uid})
        toast.success('Successfully Logged In')
        formikSi.resetForm()
        navigate('/')
        if (data) {
          console.log(data)
        }
      } catch (error) {
        if (error.response.status === 401){
          toast.error('Unauthorized: Invalid Credentials')
        }
        formikSi.resetForm()
      }
    },
  });

  // console.log(formikSi.values)

  return (
    <Box display="flex" width="100vw" height="100vh" >

      <Box width="50vw" position="relative" sx={{ backgroundImage: `url(${pic})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom', borderTopRightRadius: "4rem", borderBottomRightRadius: "4rem" }}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '75%', backgroundColor: "extra.light", opacity: '0.175', height: '80%', borderRadius: '1rem', filter: 'blur(1px)' }} />
        <Box sx={{ width: "75%", position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'transparent', zIndex: '10', padding: '1rem', height: '80%' }}>
          <Stack>
            <Typography variant="logoLarge" color="#fff">kB.com</Typography>
            <Typography variant="h4" color="#fff">khareedoBecho</Typography>
          </Stack>
          <Divider color="#e4e7ed" sx={{ marginY: '1rem' }} />
          <Box display="flex" justifyContent='space-between' flexDirection='column' height="75%">
            <Stack my={3}>
              <Typography variant='h5' >Join Us Today And</Typography>
              <Typography variant='h2' >Get the winning bid with us!</Typography>
            </Stack>
            <Typography variant='h4' >Bid, Win, Repeat: Unleash the Thrill of Auctions!.</Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" width="50vw" alignItems="center" justifyContent="center">
        <Card sx={{ width: "55%", }}>
          <CardHeader title={
            <Box display="flex" gap={4}>
              <Stack onClick={() => setToggle(true)} >
                <Typography variant="h4" sx={{ cursor: "pointer" }}>Sign In</Typography>
                {toggle ? <Box width="40%" backgroundColor="extra.main" height="0.15rem" sx={{ transition: '10s ease' }} /> : null}
              </Stack>
              <Stack onClick={() => setToggle(false)} >
                <Typography variant="h4" sx={{ cursor: "pointer" }}>Sign Up</Typography>
                {toggle ? null : <Box width="40%" backgroundColor="extra.main" height="0.15rem" sx={{ transition: '2s ease' }} />}
              </Stack>
            </Box>
          } />
          <CardContent>
            <Box backgroundColor="primary.main" height="1px" />
            <Stack my={3}>
              <Typography variant="h4" color="extra.main">To Continue</Typography>
              <Typography variant="h6" color="#fff">We need your Ussername and Password</Typography>
            </Stack>
            {toggle ?
              <form onSubmit={formikSi.handleSubmit}>
                <Stack>
                  <TextField
                    variant="standard"
                    id="username"
                    name="username"
                    label="Username"
                    value={formikSi.values.username}
                    onChange={formikSi.handleChange}
                    error={formikSi.touched.username && Boolean(formikSi.errors.username)}
                    helperText={formikSi.touched.username && formikSi.errors.username}
                    sx={{ marginBottom: '1rem' }}
                  />
                  <TextField
                    variant="standard"
                    id="password"
                    name="password"
                    label="Password"
                    value={formikSi.values.password}
                    onChange={formikSi.handleChange}
                    error={formikSi.touched.password && Boolean(formikSi.errors.password)}
                    helperText={formikSi.touched.password && formikSi.errors.password}
                    sx={{ marginBottom: '1rem' }}
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment:
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                    }}
                  />
                  <Button type="submit" sx={{ backgroundColor: 'extra.main', marginTop: "2rem", color:'black' }}>Sign In </Button>
                </Stack>
              </form> :
              <form onSubmit={formikSu.handleSubmit}>
                <Stack>
                  <TextField
                    variant="standard"
                    id="email"
                    name="email"
                    label="Email"
                    value={formikSu.values.email}
                    onChange={formikSu.handleChange}
                    error={formikSu.touched.email && Boolean(formikSu.errors.email)}
                    helperText={formikSu.touched.email && formikSu.errors.email}
                    sx={{ marginBottom: '1rem' }}
                  />
                  <TextField
                    variant="standard"
                    id="username"
                    name="username"
                    label="Username"
                    value={formikSu.values.username}
                    onChange={formikSu.handleChange}
                    error={formikSu.touched.username && Boolean(formikSu.errors.username)}
                    helperText={formikSu.touched.username && formikSu.errors.username}
                    sx={{ marginBottom: '1rem' }}
                  />
                  <TextField
                    variant="standard"
                    id="password"
                    name="password"
                    label="Password"
                    value={formikSu.values.password}
                    onChange={formikSu.handleChange}
                    error={formikSu.touched.password && Boolean(formikSu.errors.password)}
                    helperText={formikSu.touched.password && formikSu.errors.password}
                    sx={{ marginBottom: '1rem' }}
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment:
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                    }}
                  />
                  <Button type="submit" sx={{ backgroundColor: 'extra.main', marginTop: "2rem", color: 'black' }}>Sign Up </Button>
                </Stack>
              </form>}
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default Signin