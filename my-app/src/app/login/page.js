'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { Button } from '@mui/material';
const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screenspace-y-4 my-40  border-blue-400 rounded-3xl'>
      <div>
        <p className='text-blue-600 text-3xl font-bold font-serif text-center'>
          Login Page
        </p>
      </div>

      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
        noValidate
        autoComplete="off"
        className='flex flex-col items-center space-y-4 rounded-3xl'
      >
        <TextField
          required
          id="filled-required"
          label="Username"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <div className='text-sm flex '><p>Don't have and account yet?</p><Link href="/register"><p className='mx-2'>Sign up?</p></Link></div>
        <Button variant="contained" href="#" >
  Login
</Button>
      </Box>
    
    </div>
  );
}

export default Page;
