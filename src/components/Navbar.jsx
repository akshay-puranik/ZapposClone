import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { useDisclosure, Modal, ModalContent, ModalOverlay, Highlight, Center, Spacer, Flex, Text, Box, Button, Menu, MenuButton, MenuItem, MenuList, Tab, TabList, TabPanel, TabPanels, Tabs, ModalBody, Image, InputGroup, InputLeftAddon, Input, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import BlockList from './BlockList';
import CreateMenuItems from './CreateMenuItems';

const One = [
  {
    title: "The Find",
    header: true,
    path: "",
    to: ""
  },
  {
    title: "Fresh Spring/Summer Denim",
    path: "",
    to: ""
  },
  {
    title: "The Sandals Guide",
    path: "",
    to: ""
  },
  {
    title: "Energizing Sporty Looks",
    path: "",
    to: ""
  },
  {
    title: "Western-Inspired Wear",
    path: "",
    to: ""
  },
  {
    title: "L.L. Bean Hiking Musts",
    path: "",
    to: ""
  },
  {
    title: "Outdoor Style + Merrell",
    path: "",
    to: ""
  },
  {
    title: "Garden Charm Trend",
    path: "",
    to: ""
  },
]

const Mens = [
  {
    title: "The Style Room",
    header: true,
    path: "",
    to: ""
  },
  {
    title: "Newest Obsession: Schutz",
    path: "",
    to: ""
  },
  {
    title: "Lauren Ralph Lauren",
    path: "",
    to: ""
  },
  {
    title: "Romantic Utility",
    path: "",
    to: ""
  },
  {
    title: "Men's Season's Best",
    path: "",
    to: ""
  },
  {
    title: "Men's Denim Daze",
    path: "",
    to: ""
  },
  {
    title: "Men's Modern Grunge",
    path: "",
    to: ""
  },
  {
    title: "New Brands",
    path: "",
    to: "",
    header: true
  },
  {
    title: "Newest Obsession: Schutz",
    path: "",
    to: ""
  },
  {
    title: "Lauren Ralph Lauren",
    path: "",
    to: ""
  },
  {
    title: "Romantic Utility",
    path: "",
    to: ""
  },
  {
    title: "Men's Season's Best",
    path: "",
    to: ""
  },
  {
    title: "Men's Denim Daze",
    path: "",
    to: ""
  },
  {
    title: "Men's Modern Grunge",
    path: "",
    to: ""
  },
  {
    title: "New Arrivals",
    path: "",
    to: "",
    header: true
  },
  {
    title: "Newest Obsession: Schutz",
    path: "",
    to: ""
  },
  {
    title: "Lauren Ralph Lauren",
    path: "",
    to: ""
  },
  {
    title: "Romantic Utility",
    path: "",
    to: ""
  },
  {
    title: "Men's Season's Best",
    path: "",
    to: ""
  },
  {
    title: "Men's Denim Daze",
    path: "",
    to: ""
  },
  {
    title: "Men's Modern Grunge",
    path: "",
    to: ""
  },
]

// https://cdn.iconscout.com/icon/free/png-256/z-characters-character-alphabet-letter-36052.png add fecvicon 

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Box>
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
                      <MenuButton bg={"none"} onClick={onOpen} as={Button} rightIcon={<ChevronDownIcon />}>
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
              <Box style={{ backgroundColor: "black", height: "fit-content", width: "100%" }} className='nav_mid_band_vrsn'>
                <Flex p={"5px"} justifyContent={"flex-end"} >
                  <Center h={"30px"} color={"white"} pr={"30px"}>
                    FREE Shipping & FREE 365-Day Returns
                  </Center>
                </Flex>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box bg={"white"} >
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
              <InputLeftAddon borderWidth={"3px"} bg={"white"}>
                <SearchIcon />
              </InputLeftAddon>
              <Input outline={"none"} borderWidth={"3px"} borderLeft={"none"} bg={"white"} borderRadius={"5px 0 0 5px"} type='text' placeholder='Search for Shoes, Clothes, etc.' />
              <Button w={"150px"} color={"white"} bg={"#003953"} borderRadius={"0 5px 5px 0"} >SEARCH</Button>
            </InputGroup>
          </Flex>
          <Spacer />
          <Button colorScheme='teal' size='md' w={"150px"} >
            {0} My Cart
          </Button>
        </Flex>
      </Box>
      <Box bg={"#e4f0f7"} >
        <Flex>
          <Box className='menu_items'>
            <Menu>
              <MenuButton onClick={onOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                New
              </MenuButton>
              <Modal isOpen={isOpen} onClose={onClose}>
                {/* <ModalOverlay /> */}
                <ModalContent>
                  <MenuList>
                    <Flex>
                      <BlockList props={One} />
                      {/* the items go here */}
                      <Box borderLeft={"2px solid #dddddd"}>
                        <Stack spacing={"20px"} height={"fit-content"}>
                          <Center>
                            <Image width={"150px"} src={"https://m.media-amazon.com/images/G/01/2022/Global-Nav/COOP-BTC-ADIDAS-GLOBAL-NAV-350x350.jpg"}></Image>
                          </Center>
                          <Box padding={"20px"}>
                            <Center>Shop Campus Ready Adidas</Center>
                          </Box>
                          <Center>
                            <Image width={"150px"} src={"https://m.media-amazon.com/images/G/01/2022/Global-Nav/COOP-BTC-ADIDAS-GLOBAL-NAV-350x350.jpg"}></Image>
                          </Center>
                          <Center>Shop Campus Ready Adidas</Center>
                        </Stack>
                      </Box>
                    </Flex>
                  </MenuList>
                </ModalContent>
              </Modal>
            </Menu>
            <Button>Women</Button>
            <Button>Men</Button>
            <Button>Kids</Button>
            <Button>Clothing</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;