import { EmailIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Input, Menu, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box >
      <Box bg={"#144860"} className='Email_box' p={"20px 50px"}>
        <Box>
          <Text fontWeight={"semibold"} color={"white"} fontSize='xl'>Make Zappos (Emails) Your New BFF!</Text>
        </Box>
        <Box pt={"20px"} >
          <Text color={"white"} mb='8px'>Email:</Text>
          <Flex>
            <Input
              rounded={"5px"}
              p={"10px 5px"}
              width={"200px"}
              bg={"white"}
              placeholder='Email Address'
              size='sm'
            />
            <Button ml={"20px"} size={"sm"} outline="white" color='white' variant='outline'>
              <Center>
                <EmailIcon mr={"10px"} />  SUBSCRIBE TO ZAPPOS EMAILS
              </Center>
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box className='Big_Foot'>
        <Flex>
          {/* <Box>
            <ul className='unstyled-list' >
              <Text size={"xl"}> header </Text>
              <li>Name</li>
              <li>Name</li>
              <li>Name</li>
              <li>Name</li>
            </ul>
          </Box>
          <Box>
            <ul className='unstyled-list' >
              <h4> header </h4>
              <li>Name</li>
              <li>Name</li>
              <li>Name</li>
              <li>Name</li>
            </ul>
          </Box>
          <Box>
            <ul className='unstyled-list' >
              <h4> header </h4>
              <li>Name</li>
              <li>Name</li>
              <li>Name</li>
              <li>Name</li>
            </ul>
          </Box> */}
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;