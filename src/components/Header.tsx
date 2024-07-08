import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Button,useTheme,useMediaQuery } from '@mui/material';
import { NavbarWrapper } from '../styles/Style.module';
import DrawerContainer from './DrawerContainer';

 export const menuItems =[
    {name:"Home"},
    {name:"Now Playing"},
    {name:"Popular"},
    {name:"TV show"}
];
 
const Header = () => {
  const themes =useTheme();
  const isMatching = useMediaQuery(themes.breakpoints.down('md'));

  return (
    <NavbarWrapper>
      <AppBar sx={{ padding: '10px', backgroundColor: "black" }}>
        <Toolbar>
          
          <Typography className='logo'>
            Binggee
          </Typography>
          {isMatching ?(
            <DrawerContainer />
          ) :(
            <>
            <div className='navlinks'>
            {menuItems.map((nav, index) => (
              <Tab className='links' label={nav.name} key={index} />
            ))}
          </div>
                  <Button className='loginBtn' variant='contained' color='info'>Login</Button>
                  </>
        )}
         
        </Toolbar>
      </AppBar>
      
    </NavbarWrapper>
  );
};


export default Header;
