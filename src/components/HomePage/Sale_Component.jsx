import { Box, Center, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Sale_Component = () => {
  return (
    <Box>
      <Center>
        <HStack px={"100px"} spacing={"30px"} >
          <Box>
            <Center>
              <VStack>
                <Image w={"100%"} src={"https://m.media-amazon.com/images/G/01/2022/homepage8.22/SALE-VIP-SITE-WOMENS-TRIPTYCH-500x500.jpg"} />
                <Box>
                  <Center>
                    <VStack>
                      <Text size={"l"} >Women's Essentials On Sale</Text>
                      <Text>Now's your time to get more for less</Text>
                      <Link to={""}>SHOP WOMEN'S SALE</Link>
                    </VStack>
                  </Center>
                </Box>
              </VStack>
            </Center>
          </Box>
          <Box>
            <Center>
              <VStack>
                <Image w={"100%"} src={"https://m.media-amazon.com/images/G/01/2022/homepage8.22/SALE-VIP-SITE-WOMENS-TRIPTYCH-500x500.jpg"} />
                <Box>
                  <Center>
                    <VStack>
                      <Text>Men's Basics On Sale</Text>
                      <Text>Stock up on sale sho</Text>
                      <Link to={""}>SHOP WOMEN'S SALE</Link>
                    </VStack>
                  </Center>
                </Box>
              </VStack>
            </Center>
          </Box>
          <Box>
            <Center>
              <VStack>
                <Image w={"100%"} src={"https://m.media-amazon.com/images/G/01/2022/homepage8.22/SALE-VIP-SITE-WOMENS-TRIPTYCH-500x500.jpg"} />
                <Box>
                  <Center>
                    <VStack>
                      <Text>Footwear on Sale</Text>
                      <Text>Save on sneakers, sandles, boots and more!</Text>
                      <Link to={""}>SHOP SALE SHOES</Link>
                    </VStack>
                  </Center>
                </Box>
              </VStack>
            </Center>
          </Box>
        </HStack>
      </Center>
    </Box>
  );
};

export default Sale_Component;