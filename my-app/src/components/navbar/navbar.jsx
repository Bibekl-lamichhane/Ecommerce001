"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function NavBar({addProduct}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <div className='flex justify-between mx-6'>
        <div>Rikki-Bikki Logo</div>
      <Box  sx={{    display: {
      xs: 'none',   // hidden on extra small
      sm: 'none',   // hidden on small
      md: 'flex',   // visible on medium and up
    },alignItems: 'center',textAlign: 'center',alignItems: 'center' }}>
       <Link href="/">  <Typography sx={{ minWidth: 100,fontSize:20,marginX:2 ,fontWeight:500}} className=' hover:text-blue-400 hover:cursor-pointer '>Home</Typography></Link>
      <Link href="/shopnow">  <Typography sx={{ minWidth: 100 ,fontSize:20,marginX:2,fontWeight:500}} className=' hover:text-blue-400 hover:cursor-pointer '>Shop Now</Typography></Link>
       <Link href="/contactus">  <Typography sx={{ minWidth: 100 ,fontSize:20,marginX:2,fontWeight:500}} className=' hover:text-blue-400 hover:cursor-pointer '>Contact Us</Typography></Link>
       <Link href="/aboutus">  <Typography sx={{ minWidth: 100 ,fontSize:20,marginX:2,fontWeight:500}} className=' hover:text-blue-400 hover:cursor-pointer '>About Us</Typography></Link></Box>
        <div className='flex justify-center items-center  '>
          <div  className='relative pb-10'>
            <ShoppingCartIcon className='text-blue-400 absolute right-4' fontSize="large" />
            <p className='block bg-amber-500 text-white rounded-full text-sm m-0 p-2  absolute right-0.5 bottom-3'>{addProduct}</p>
          </div>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>RB</Avatar>
          </IconButton>
        </Tooltip></div></div>
      
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
         <Link href="/login">Logout</Link> 
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
