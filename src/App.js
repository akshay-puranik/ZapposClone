import { Box, Center, Image, Text } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer_Components/Footer';
import Carousel_comp from './components/HomePage/Carousel_comp';
import Categories_Component from './components/HomePage/Categories_Component';
import Sale_Component from './components/HomePage/Sale_Component';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel_comp/>
      <Box>
        <Center>
          <Image  width={"92%"} height={"600px"} src='https://m.media-amazon.com/images/G/01/2022/homepage8.22/SALE-VIP-SITE-HERO-1080x720.gif'  />
        </Center>
      </Box>
      
      <Image/>
      <Categories_Component />
      <Sale_Component />
      <Footer />
    </div>
  );
}

export default App;
