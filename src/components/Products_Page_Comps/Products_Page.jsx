import { Box, Center, Grid, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';

const Products_Page = () => {

  const [prod_list,setProd_list] = React.useState([])

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    const data = axios.get(`https://obscure-island-11757.herokuapp.com/ecommerse_data?_limit=10`);
    setProd_list([...data]);
  }

  return (
    <div>
      <Grid>
        {
          data.map((el) => {
            return (
              <Product key={el.id} />
            )
          })
        }
      </Grid>      
    </div>
  );
};

export default Products_Page;