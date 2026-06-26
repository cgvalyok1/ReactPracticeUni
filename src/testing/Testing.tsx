import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Quiz from '../testing/features/Quiz';

function Testing() {
  return (
    <>
      <Navbar active="4"/>
      <Quiz />
      <Footer />
    </>
  );
}

export default Testing;