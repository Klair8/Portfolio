import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import C from '../assets/C.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Stack
      spacing={4}
      direction="row"
      sx={{
        marginLeft: '20vh',
        '@media (max-width: 600px)': {
          marginLeft: 0,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Link to="/">
        <img src={C} alt="Logo" style={{ width: '50px', height: '50px' }} />
      </Link>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          '@media (max-width: 600px)': {
            display: isMenuOpen ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <Button
          variant="outlined"
          sx={{ color: 'inherit', borderRadius: 28, borderColor: 'black', marginRight: '8px' }}
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          variant="outlined"
          sx={{ color: 'inherit', borderRadius: 28, borderColor: 'black', marginRight: '8px' }}
          component={Link}
          to="/About"
        >
          About
        </Button>
        <Button
          variant="outlined"
          sx={{ color: 'inherit', borderRadius: 28, borderColor: 'black', marginRight: '8px' }}
          component={Link}
          to="/Projects"
        >
          Projects
        </Button>
        <Button
          variant="outlined"
          sx={{ color: 'inherit', borderRadius: 28, borderColor: 'black', marginRight: '8px' }}
          component={Link}
          to="/Contact"
        >
          Contact
        </Button>
        </Stack>
        <Button
          onClick={() => {
            window.open(
              'https://drive.google.com/file/d/1nijyh2BgXX3GoNwcmM85m3OpRknCjSib/view?usp=sharing'
            );
          }}
          sx={{ color: 'inherit' }}
          className="resumebtn"
        >
          <span>Resume</span>
        </Button>
      <Button
        onClick={handleMenuToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          color: 'inherit',
          borderRadius: 28,
          borderColor: 'black',
        }}
      >
         {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </Button>
    </Stack>
  );
};

export default Header;
