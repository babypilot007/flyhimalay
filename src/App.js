import './App.css';
import Ppl from './Ppl';
import Instrument from './Instrument';
import Cpl from './Cpl';

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




        </Routes>
    


   

  );
}

export default App;
