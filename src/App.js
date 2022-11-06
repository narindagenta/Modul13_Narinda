
import './App.css';
import React from 'react';
import Judul from './header/Judul/title';
import DarkExample from './body/table'
import Footer from './footer/footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './contact/contact';
import About from './about/about';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
            <Judul />
            <DarkExample />
            <Footer />
            </>
          }></Route>
          <Route path='/About' element={
            <About/>
          }></Route>
          <Route path='/Contact' element={
            <Contact/>
          }></Route>
        </Routes>
      </Router>
     </>

  );
}

export default App;