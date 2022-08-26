import { useContext } from 'react';
import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, InputGroup, InputLeftAddon, Link, Menu, MenuButton, MenuList, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { SearchIcon, SunIcon } from '@chakra-ui/icons';
import { CartContext } from '../../contexts/CartContext';

const Navbar_Search_Cart = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const cartItems = useContext(CartContext);

  return (
    <Box>
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
          <Button ref={btnRef} onClick={onOpen} colorScheme='teal' size='md' w={"150px"} >
            {cartItems} My Cart
          </Button>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        size={"md"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader >
            <Text p={"10px"} borderBottom={"1px solid gray"} fontSize='3xl'>My Cart</Text>
            <Box w={"100%"}>
              <Center>
                <Text p={"10px"} fontSize='sm' >Check out to earn up to $12.80 in VIP points</Text>
              </Center>
            </Box>
          </DrawerHeader>

          <DrawerBody>
            {/* Add private route here */}
            <Center>
              <Image src='	https://www.zappos.com/marty-assets/empty-cart.aa012412a3668eb7151b6731c716a428.svg' />
            </Center>
            <Box p={"60px"}>
              <Center>
                <Button colorScheme='blue' size={"lg"} >SIGN IN</Button>
              </Center>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>






  );
};

export default Navbar_Search_Cart;