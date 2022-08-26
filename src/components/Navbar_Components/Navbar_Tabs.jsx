import { ChevronDownIcon } from '@chakra-ui/icons';
import {  Button, Box, Center, Flex, Highlight, Image, Menu, MenuButton, Modal, ModalBody, ModalContent, ModalOverlay, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure, VStack } from '@chakra-ui/react';

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar_Tabs = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
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
                  <Center>
                    <Menu>
                      <MenuButton bg={"transparent"} onClick={onOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                        Customer Service
                      </MenuButton>
                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent >
                          <ModalBody w={"max-content"} >
                            <VStack>
                              <Link to="/">Contact Info</Link>
                              <Link to="/">FAQ</Link>
                              <Link to="/">Give Us Feedback</Link>
                            </VStack>
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                    </Menu>
                  </Center>
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
  );
};

export default Navbar_Tabs;