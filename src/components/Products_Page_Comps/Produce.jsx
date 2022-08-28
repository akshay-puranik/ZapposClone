import { Box } from '@chakra-ui/react';
import React from 'react';

const Produce = ({item}) => {
  return (
    <Box>
      <Box>
        <Center>
          <Image src={item.image} />
        </Center>
      </Box>
      <Box>
        <Text>{ item.title }</Text>
      </Box>
      
    </Box>
  );
};

export default Produce;