import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import Navbar_Drop_Menus from './Navbar_Components/Navbar_Drop_Menus';
import Navbar_Tabs from './Navbar_Components/Navbar_Tabs';
import Navbar_Search_Cart from "./Navbar_Components/Navbar_Search_Cart"

// https://cdn.iconscout.com/icon/free/png-256/z-characters-character-alphabet-letter-36052.png add fecvicon 

const Navbar = () => {

  return (
    <Box>
      <Navbar_Tabs />
      <Navbar_Drop_Menus />
      <Navbar_Search_Cart />
    </Box>
  );
};

export default Navbar;