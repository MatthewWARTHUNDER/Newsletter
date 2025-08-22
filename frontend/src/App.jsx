import { useState } from 'react';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import Newsletter from './pages/Newsletter';
import Confirmation from './pages/Confirmation';

function App() {


  return (
    <>
    <Navbar/>
    <Newsletter/>
    {/* <Confirmation/> */}
    </>
  );
}

export default App;
