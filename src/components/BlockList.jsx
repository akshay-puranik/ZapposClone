import { Box, MenuItem } from '@chakra-ui/react';
import React from 'react';

const BlockList = ({props}) => {
  const data = Array.from(props)
  return (
    <Box>
      {
        data.map((el) => {
          return el.header ? <MenuItem fontWeight={"bold"}>{ el.title }</MenuItem>: <MenuItem>{ el.title }</MenuItem>
        })
      }
    </Box>
  );
};

export default BlockList;