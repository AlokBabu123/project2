import { AppBar, Box } from '@mui/material'
import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
        </Typography>
        <Button color="inherit"><Link to='/'> Login</Link></Button>
        <Button color="inherit"><Link to='/contact'>Contact</Link></Button>
        <Button color="inherit"><Link to="/signup"style={{color:'white',textDecoration:'none'}}>signup</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default Navbar
