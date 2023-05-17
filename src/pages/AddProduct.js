import React, { useContext, useEffect, useState } from 'react'
import { Box, Typography, Stack, TextField, Divider, MenuItem, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import 'react-toastify/dist/ReactToastify.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import moment from 'moment'

import { UserContext } from '../contexts/userContext'
import ProductCard from '../components/ProductCard'
import { axiosInstance } from '../config/axiosInterceptor';

const types = [
  {
    value: 'Clothes',
    label: 'Clothes',
  },
  {
    value: 'Electronics',
    label: 'Electronics',
  },
  {
    value: 'Automobile',
    label: 'Automobile',
  },
  {
    value: 'Shoes',
    label: 'Shoes',
  },
  {
    value: 'Books',
    label: 'Books',
  },
  {
    value: 'Art',
    label: 'Art',
  },
  {
    value: 'NFT',
    label: 'NFT',
  },
  {
    value: 'Others',
    label: 'Others',
  },
];


const AddProduct = () => {
  const [{ currentUser }] = useContext(UserContext)
  const navigate = useNavigate()
  // const [files, setFiles] = useState([])
  const [toggle, setToggle] = useState(true)

  const [dataUri, setDataUri] = useState('')

  const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
  })

  const onChange = (file) => {
    
    if(!file) {
      setDataUri('');
      return;
    }

    fileToDataUri(file)
      .then(dataUri => {
        setDataUri(dataUri)
      })
    
  }

  const validationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .required('Product name is required'),
    type: yup
      .string('Enter the Type of Product')
      .required('Password is required'),
    description: yup
      .string('Write a brief description about the product')
      .required('Description is required'),
    bid_start_time: yup
      .string('Enter the Bid Start Time')
      .required('Bid start time is required'),
    bid_end_time: yup
      .string('Enter the Bid end Time')
      .required('Bid end Time is required'),
    bid_start_price: yup
      .string('Enter bidding start price')
      .required('Bid Start Price is required'),
    img: yup
      .string('Enter bidding start price')
    // .required('Bid Start Price is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      description: '',
      bid_start_time: '',
      bid_end_time: '',
      bid_start_price: '',
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log('reaching here')
      const loginCreds = {
        ...formik.values,
        name: formik.values.name,
        type: formik.values.type,
        description: formik.values.description,
        bid_start_time: formik.values.bid_start_time,
        bid_end_time: formik.values.bid_end_time,
        bid_start_price: formik.values.bid_start_price,
        img: dataUri,
      }
      try {
        const { data } = await axiosInstance.post('/products', loginCreds)
        console.log(data)

      } catch (error) {
        if (error.response.status === 401) {
          toast.error('Unauthorized: Invalid Credentials')
        }
        formik.resetForm()
      }
    },
  });

  // const handleUpload = (newFiles) => {
  //   setFiles((prevFiles) => [...newFiles]);
  // }

  useEffect(() => {
    if (!currentUser.isLoggedIn) {
      navigate('/login')
      toast.error('Please Sign In to Continue...')
    }
  }, [])

  // console.log(formik.values)

  return (
    <Box display='flex' sx={{ height: '100vh' }}>
      <Box sx={{ width: '65%', padding: '4rem' }}>
        <Typography variant='h2' sx={{ marginBottom: '2rem' }}>Add a Product</Typography>
        <Box display="flex" gap={4} sx={{ marginBottom: '2rem' }}>
          <Stack onClick={() => setToggle(true)} >
            <Typography variant="h4" sx={{ cursor: "pointer" }}>General Information</Typography>
            {toggle ? <Box width="40%" backgroundColor="extra.main" height="0.15rem" sx={{ transition: '10s ease' }} /> : null}
          </Stack>
          <Stack onClick={() => setToggle(false)} >
            <Typography variant="h4" sx={{ cursor: "pointer" }}>Date and Time</Typography>
            {toggle ? null : <Box width="40%" backgroundColor="extra.main" height="0.15rem" sx={{ transition: '2s ease' }} />}
          </Stack>
        </Box>

        <form onSubmit={formik.handleSubmit} >
          {toggle ?
            <Stack>

              <Box display='flex' sx={{ width: '100%' }} alignItems='center'>
                <Stack sx={{ width: '50%' }}>
                  <Typography variant='h5' sx={{ color: 'primary.main', fontSize: '1.3rem' }}>Product name</Typography>
                  <Typography variant='subtitle2'>Enter a name for the product</Typography>
                </Stack>
                <Stack sx={{ width: '50%' }}>
                  <TextField
                    variant="filled"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={{ marginBottom: '1rem', width: '100%' }}
                  />
                </Stack>
              </Box>

              <Divider />

              <Box display='flex' sx={{ width: '100%', marginTop: '2rem' }} alignItems='center'>
                <Stack sx={{ width: '50%' }}>
                  <Typography variant='h5' sx={{ color: 'primary.main', fontSize: '1.3rem' }}>Description</Typography>
                  <Typography variant='subtitle2'>Provide a brief description for the product</Typography>
                </Stack>
                <Stack sx={{ width: '50%' }}>
                  <TextField
                    variant="filled"
                    id="description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    sx={{ marginBottom: '1rem', width: '100%' }}
                  />
                </Stack>
              </Box>

              <Divider />

              <Box display='flex' sx={{ width: '100%', marginTop: '2rem', marginBottom: '1rem' }} alignItems='center'>
                <Stack sx={{ width: '50%' }}>
                  <Typography variant='h5' sx={{ color: 'primary.main', fontSize: '1.3rem' }}>Type</Typography>
                  <Typography variant='subtitle2'>Please select the type of the product</Typography>
                </Stack>
                <Stack sx={{ width: '50%' }}>
                  <TextField
                    id="type"
                    variant='filled'
                    select
                    name="type"
                    value={formik.values?.type}
                    onChange={formik.handleChange}
                    error={formik.touched?.type && Boolean(formik.errors?.type)}
                    helperText={formik.touched?.type && formik.errors?.type}
                    sx={{ marginBottom: '1rem', width: '100%' }}
                  >
                    {types.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>
              </Box>

              <Divider />

              <Box display='flex' sx={{ width: '100%', marginTop: '2rem' }} alignItems='center'>
                <Stack sx={{ width: '50%' }}>
                  <Typography variant='h5' sx={{ color: 'primary.main', fontSize: '1.3rem' }}>Product Starting Bid Price</Typography>
                  <Typography variant='subtitle2'>Fill in the Minimum Price to bid</Typography>
                </Stack>
                <Stack sx={{ width: '50%' }}>
                  <TextField
                    variant="filled"
                    id="bid_start_price"
                    name="bid_start_price"
                    value={formik.values.bid_start_price}
                    onChange={formik.handleChange}
                    error={formik.touched.bid_start_price && Boolean(formik.errors.bid_start_price)}
                    helperText={formik.touched.bid_start_price && formik.errors.bid_start_price}
                    sx={{ marginBottom: '1rem', width: '100%' }}
                  />
                </Stack>
              </Box>

              <Divider />

              <Box display='flex' sx={{ width: '100%', marginTop: '2rem' }} alignItems='center'>
                <Stack sx={{ width: '50%' }}>
                  <Typography variant='h5' sx={{ color: 'primary.main', fontSize: '1.3rem' }}>Product Picture</Typography>
                  <Typography variant='subtitle2'>Upload a picture of the product</Typography>
                </Stack>
                <Stack sx={{ width: '50%' }}>
                  <Button variant="contained" component="label">
                    Upload Picture
                    <input hidden accept="image/*" multiple type="file" onChange={(e) => onChange(e.target.files[0] || null)} />

                  </Button>
                  {/* <Button onClick={() => {
                    console.log(files[0])
                    if (!files[0]) { return }
                    fileToDataUri(files[0])
                      .then(dataUri => {
                        console.log(dataUri)

                      })
                  }}> Dumy</Button> */}
                </Stack>
              </Box>
              <Box display='flex' flexDirection='row-reverse' marginTop={2}>
                <Box display='flex' gap={2}>
                  <Button variant='contained' disabled>Back</Button>
                  <Button variant='contained' onClick={() => setToggle(false)}>Next</Button>
                </Box>
              </Box>
            </Stack> :
            <Stack sx={{ height: '80%' }}>
              <Box display='flex' sx={{ width: '100%', marginTop: '2rem', marginBottom: '1rem' }} alignItems='center'>
                <Stack sx={{ width: '50%' }}>
                  <Typography variant='h5' sx={{ color: 'primary.main', fontSize: '1.3rem' }}>Bid Start Date and Time</Typography>
                  <Typography variant='subtitle2'>Provide the time when bid should commence</Typography>
                </Stack>
                <Stack sx={{ width: '50%' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimeField']}>
                      <DateTimePicker
                        label='Bid Start Date & Time'
                        variant='filled'
                        format='YYYY/MM/DD hh:mm a'
                        id="bid_start_time"
                        name="bid_start_time"
                        value={formik.values.bid_start_time}
                        onChange={(value) => {
                          formik.setFieldValue('bid_start_time', value)
                        }}
                        error={formik.touched.bid_start_time && Boolean(formik.errors.bid_start_time)}
                        helperText={formik.touched.bid_start_time && formik.errors.bid_start_time}
                        sx={{ marginBottom: '1rem', width: '100%' }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Stack>

              </Box>

              <Divider />

              <Box display='flex' sx={{ width: '100%', marginTop: '1rem' }} alignItems='center'>
                <Stack sx={{ width: '50%' }}>
                  <Typography variant='h5' sx={{ color: 'primary.main', fontSize: '1.3rem' }}>Bid End Date and Time</Typography>
                  <Typography variant='subtitle2'>Provide the time when bid will end</Typography>
                </Stack>
                <Stack sx={{ width: '50%' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimeField']} sx={{ width: '100%' }}>
                      <DateTimePicker
                        // onChange={(newValue) => setValue(newValue)}
                        label='Bid End Date & Time'
                        variant='filled'
                        format='YYYY/MM/DD hh:mm a'
                        id="bid_end_time"
                        name="bid_end_time"
                        value={formik.values.bid_end_time}
                        onChange={(value) => {
                          formik.setFieldValue('bid_end_time', value)
                        }}
                        error={formik.touched.bid_end_time && Boolean(formik.errors.bid_end_time)}
                        helperText={formik.touched.bid_end_time && formik.errors.bid_end_time}
                        sx={{ marginBottom: '1rem', width: '100%' }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Stack>
              </Box>
              <Box display='flex' flexDirection='row-reverse' marginTop={2} alignItems='flex-end' sx={{ height: '100%' }}>
                <Box display='flex' gap={2}>
                  <Button variant='contained' onClick={() => setToggle(true)}>Back</Button>
                  <Button type='submit' variant='contained' sx={{ backgroundColor: 'success.main' }}>Add Product</Button>
                </Box>
              </Box>
            </Stack>
          }
        </form>

      </Box>

      <Box sx={{ width: '40%', backgroundColor: 'accent2.main', paddingTop: '4rem', paddingLeft: '1rem' }}>
        <Typography variant='h4' mb={4}>Preview Product Card</Typography>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <ProductCard data={formik.values}/>
        </Box>
      </Box>
    </Box>
  )
}

export default AddProduct