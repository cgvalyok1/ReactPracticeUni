import Container from '@mui/material/Container';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import HeroGrid from './components/HeroGrid';
import ContentGrid from './components/ContentGrid';

function Main() {
  return (
    <> <Navbar active="1"/>

      <Container
        sx={{
          py: 1,
        }}
      >
        <HeroGrid />
        <ContentGrid />
      </Container>

      <Footer />
    </>
  );
}

export default Main;
