import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { useDisclosure, Modal, ModalContent, ModalOverlay, Highlight, Center, Spacer, Flex, Text, Box, Button, Menu, MenuButton, MenuItem, MenuList, Tab, TabList, TabPanel, TabPanels, Tabs, ModalBody, Image, InputGroup, InputLeftAddon, Input } from '@chakra-ui/react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <div>
        <Tabs size='md' variant='enclosed'>
          <TabList>
            <Tab>
              <Center>
                <Image h={"25px"} src={"https://m.media-amazon.com/images/G/01/zappos/melody/black-logo.svg"} />
              </Center>
            </Tab>
            <Tab>
              <Center>
                <Image h={"12px"} src={"https://m.media-amazon.com/images/G/01/vrsnl/vrsnl-logo._CB1564076501_.svg"} />
              </Center>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={"0px"} pt={"5px"}>
              <Box bgColor={"#0076bd"} className='nav_mid_band_zappos'>
                <Flex>
                  <Box>
                    <Menu>
                      <MenuButton onClick={onOpen} style={{ backgroundColor: "transparent", color: "white" }} as={Button} rightIcon={<ChevronDownIcon />}>
                        Customer Service
                      </MenuButton>

                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <MenuList >
                            <MenuItem>Contact Info</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                            <MenuItem>Give Us Feedback</MenuItem>
                          </MenuList>
                        </ModalContent>
                      </Modal>
                    </Menu>
                  </Box>
                  <Spacer />
                  <Center pr="30px" color={"white"}>
                    <Highlight query={"More About Shipping & Returns"} styles={{ color: "white", p: '1', fontWeight: 'bold' }} >
                      Every Zappos order comes with FAST, FREE Shipping, plus a FREE 365-Day Return Policy! More About Shipping & Returns
                    </Highlight>
                  </Center>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel p={"0px"} pt={"5px"}>
              <div style={{ backgroundColor: "black", height: "fit-content", width: "100%" }} className='nav_mid_band_vrsn'>
                <Flex p={"5px"} justifyContent={"flex-end"} >
                  <Center h={"30px"} color={"white"} pr={"30px"}>
                    FREE Shipping & FREE 365-Day Returns
                  </Center>
                </Flex>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <Box>
        <Flex p={"15px"}>
          <Link to="">
            <Center>
              <Image h={"40px"} src={"https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg"}>

              </Image>
            </Center>
          </Link>
          <Spacer />
          <Flex width={"500px"}>
            <InputGroup>
              <InputLeftAddon bg={"none"}>
                <SearchIcon />
              </InputLeftAddon>
              <Input borderRadius={"5px 0 0 5px"} type='text' placeholder='Search for Shoes, Clothes, etc.' />
              <Button borderRadius={"0 5px 5px 0"} >Search</Button>
            </InputGroup>
          </Flex>
          <Spacer />
          <Button colorScheme='teal' size='md' w={"150px"} >
            My Cart
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;