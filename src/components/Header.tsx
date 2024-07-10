import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Button,useTheme,useMediaQuery } from '@mui/material';
import { NavbarWrapper } from '../styles/Style.module';
import DrawerContainer from './DrawerContainer';
import { NavLink } from 'react-router-dom';

 export const menuItems =[
    {name:"Home" , link: "/"},
    {name:"Now Playing", link: "now_playing"},
    {name:"Popular", link: "popular"},
    {name:"TV show", link: "tv_shows"}
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
              <NavLink to={nav.link} key={index}>
              <Tab className='links' label={nav.name} key={index} />
              </NavLink>
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
