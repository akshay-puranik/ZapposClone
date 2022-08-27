import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Center, Text } from '@chakra-ui/react';

const Carousel_comp = () => {



  return (
    <Carousel showStatus={false} showIndicators={false} infiniteLoop={true} autoPlay={true} >
      <Box>
        <Center>
          <Box w={"100%"} p={"15px"} bg={"rgb(229 241 248)"} >
            <Text>Be the first to shop the newest home styles—now on Zappos! Shop Home Now</Text>
          </Box>
        </Center>
      </Box>
      <Box>
        <Center>
          <Box w={"100%"} p={"15px"} bg={"rgb(229 241 248)"} >
            <Text>VIP Sale on now! Only 1 day 22:25:08 left to shop! Shop The Sale</Text>
          </Box>
        </Center>
      </Box>
      <Box>
        <Center>
          <Box w={"100%"} p={"15px"} bg={"rgb(229 241 248)"} >
            <Text>Easy Returns: FREE UPS Pickups from your home (no printer required)! Learn More</Text>
          </Box>
        </Center>
      </Box>
      <Box>
        <Center>
          <Box w={"100%"} p={"15px"} bg={"rgb(229 241 248)"} >
            <Text>VIP Sale on now! Only 1 day 22:24:36 left to shop! Shop The Sale</Text>
          </Box>
        </Center>
      </Box>
    </Carousel>
  );
};

export default Carousel_comp;