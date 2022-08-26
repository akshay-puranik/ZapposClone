import { Box, Center, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories_Component = () => {
  const data = [
    {
      image: "https://m.media-amazon.com/images/I/51d8kXGgajL._AC_SX255_.jpg",
      title:"Shoes"
    },
    {
      image: "https://m.media-amazon.com/images/I/51d8kXGgajL._AC_SX255_.jpg",
      title:"Shoes"
    },
    {
      image: "https://m.media-amazon.com/images/I/51d8kXGgajL._AC_SX255_.jpg",
      title:"Shoes"
    },
    {
      image: "https://m.media-amazon.com/images/I/51d8kXGgajL._AC_SX255_.jpg",
      title:"Shoes"
    },
    {
      image: "https://m.media-amazon.com/images/I/51d8kXGgajL._AC_SX255_.jpg",
      title:"Shoes"
    },
    {
      image: "https://m.media-amazon.com/images/I/51d8kXGgajL._AC_SX255_.jpg",
      title:"Shoes"
    },
  ];
  return (
      <Box w={"100%"} className='home_categories' p={"20px"} >
        <Text fontSize={"xl"} ml={"30px"} fontWeight={"semibold"}>Shop Sale Categories</Text>
        <Box p={"20px"} >
          <HStack spacing={"20px"}>
            {
              data.map(el => {
                return (
                  <Box key={Date.now().toString()+Math.random()} bg={"#f5f5f5"} width={"90%"} rounded={"5px"} p={"10px"}  >
                    <Box>
                        <Center>
                        <Image h={"250px"} p={"10px"} src={el.image}></Image>
                        </Center>
                      </Box>
                      <Center>
                        <Text p={"20px"} fontSize={"lg"} >{el.title}</Text>
                      </Center>
                    </Box>
                )
              })
            }
          </HStack>
        </Box>
      </Box>
  );
};

export default Categories_Component;