import { Box, MenuItem } from '@chakra-ui/react';
import React from 'react';

const BlockList = ({props}) => {
  const data = Array.from(props)
  // console.log(data)
  return (
    <Box>
      {
        data.map((el) => {
          return el.header ? <MenuItem key={el.title} fontWeight={"bold"}>{el.title}</MenuItem> : <MenuItem key={el.title}>{ el.title }</MenuItem>
        })
      }
    </Box>
  );
};

export default BlockList;