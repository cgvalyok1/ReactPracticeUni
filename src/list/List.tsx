import React from 'react';
import Container from '@mui/material/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UniversityGrid from './components/UniversityGrid'; // создадим

function List() {
  return (
    <>
      <Navbar active="2"/>
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <UniversityGrid />
      </Container>
      <Footer />
    </>
  );
}

export default List;