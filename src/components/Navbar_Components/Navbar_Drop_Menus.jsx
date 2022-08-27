import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Image, Menu, MenuButton, MenuList, Stack, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import BlockList from "../BlockList"
import {Menu_Data_One} from "./menuData"
import {Menu_Data_Two} from "./menuData"
import {Menu_Data_Thr} from "./menuData"
import {Menu_Data_For} from "./menuData"

const Navbar_Drop_Menus = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Flex>
        <Box w={"100%"} bg={"#f4f4f4"} >

          <Box className='menu_items' >
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                New
              </MenuButton>
              <MenuList>
                <Flex>
                  <BlockList props={Menu_Data_One} />
                  <BlockList props={Menu_Data_Two} />
                  <BlockList props={Menu_Data_Thr} />
                  <BlockList props={Menu_Data_For} />
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
            </Menu>

            <Button>Kids</Button>
            <Button>Clothing</Button>
          </Box>
          <Box>

          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar_Drop_Menus;