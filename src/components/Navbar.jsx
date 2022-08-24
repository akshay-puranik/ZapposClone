import { ChevronDownIcon } from '@chakra-ui/icons';
import { Highlight, Center, Spacer,Flex, Text, Box, Button, Menu, MenuButton, MenuItem, MenuList, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div>
        <Tabs size='md' variant='enclosed'>
          <TabList>
            <Tab>Zappos</Tab>
            <Tab>Vrsnl</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={"0px"} pt={"5px"}>
              <Box style={{ backgroundColor: "blue", height: "fit-content", width: "100%" }} className='nav_mid_band_zappos'>
                <Flex>
                  <Box>
                    <Menu>
                      <MenuButton style={{ backgroundColor: "transparent", color: "white" }} as={Button} rightIcon={<ChevronDownIcon />}>
                        Customer Service
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Contact Info</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                        <MenuItem>Give Us Feedback</MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                  <Spacer />
                    <Center pr="30px" color={"white"}>
                    <Highlight query={"More About Shipping & Returns"} styles={{ color:"white", p: '1', fontWeight: 'bold' }} >
                      Every Zappos order comes with FAST, FREE Shipping, plus a FREE 365-Day Return Policy! More About Shipping & Returns
                    </Highlight>
                    </Center>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel p={"0px"} pt={"5px"}>
              <div style={{ backgroundColor: "black", height: "30px", width: "100%" }} className='nav_mid_band_vrsn'>
                <Flex>
                  <Center h={"30px"} color={"white"} pr={"30px"}>
                    FREE Shipping & FREE 365-Day Returns
                  </Center>
                </Flex>  
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Navbar;