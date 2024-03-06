import './App.css';
import Ppl from './Ppl';
import Instrument from './Instrument';
import Cpl from './Cpl';
import Blog from './Blog';
import Testimony from './Testimony';
import Notfound from './Notfound';
import Contact from './Contact';

import { Routes, Route } from "react-router-dom";

import Home from './Home';
import Study from './Study';

function App() {


  return (
     <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/study' element = {<Study />}></Route>
          <Route path='/study/Ppl' element = {<Ppl />}></Route>
          <Route path='/study/instrument' element = {<Instrument />}></Route>
          <Route path='/study/cpl' element = {<Cpl />}></Route>
          <Route path='/blog' element = {<Blog />}></Route>
          <Route path='/testimony' element = {<Testimony />}></Route>
          <Route path='/contact' element = {<Contact />}></Route>

          <Route path='*' element = {<Notfound />}></Route>







        </Routes>
    


   

  );
}

export default App;
