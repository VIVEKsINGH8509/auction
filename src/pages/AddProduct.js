import React, { useContext, useEffect } from 'react'
import { Box, Typography, Stack, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { UserContext } from '../contexts/userContext'

const AddProduct = () => {
  const [{ currentUser }] = useContext(UserContext)
  const navigate = useNavigate()

  const validationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .required('Product name is required'),
    type: yup
      .string('Enter the Type of Product')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name:'',
      type:'',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log('reaching here')
      const loginCreds = {
        ...formik.values,
        username: formik.values.username,
        password: formik.values.password,
        roles: formik.values.username === 'admin' ? 'admin' : 'user'
      }
      try {
        
      } catch (error) {
        if (error.response.status === 401){
          toast.error('Unauthorized: Invalid Credentials')
        }
        formik.resetForm()
      }
    },
  });

  useEffect(() => {
    if (!currentUser.isLoggedIn) {
      navigate('/login')
      toast.error('Please Sign In to Continue...')
    }
  }, [])

  return (
    <Box display='flex' paddingTop="4rem" paddingLeft="4rem" sx={{width: '100%', height: '100vh'}}>
      <Box sx={{ width: '100%', backgroundColor: 'accent.main' }}>
        <Typography variant='h3' sx={{marginBottom: '2rem'}}>Add a Product</Typography>
        <Stack>
          <Typography variant='h5'>General Information</Typography>
          <Box display='flex' >
            <Stack>
              <Typography variant='h6'>Product name</Typography>
              <Typography variant='body1'>Enter a name for the product</Typography>
            </Stack>
            <Stack>
              <TextField
                variant="standard"
                id="name"
                name="name"
                // label="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                sx={{ marginBottom: '1rem' }}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ width: '40%', backgroundColo: 'extra.main' }}>

      </Box>
    </Box>
  )
}

export default AddProduct