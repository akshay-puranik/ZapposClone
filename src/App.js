import { Box, Center, Image, Text } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer_Components/Footer';
import Categories_Component from './components/HomePage/Categories_Component';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Carrocel /> */}
      <Box>
        <Center>
          <Image  width={"92%"} height={"600px"} src='https://m.media-amazon.com/images/G/01/2022/homepage8.22/SALE-VIP-SITE-HERO-1080x720.gif'  />
        </Center>
      </Box>
      <Categories_Component />
      
      <Image/>
      <Footer />
    </div>
  );
}

export default App;
