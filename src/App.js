import './App.css';
import Ppl from './Ppl';
import Instrument from './Instrument';
import Cpl from './Cpl';
import Blog from './Blog';
import Testimony from './Testimony';
import Notfound from './Notfound';
import Contact from './Contact';
import Newsletter from './Newsletter';
import PostNews from './PostNews';
import News from './News';
import Product from './Product';
import Videos from './Videos';

import { Routes, Route } from "react-router-dom";

import Home from './Home';
import Study from './Study';
import PplTopic from './PplTopic';
import PplDownloads from './PplDownloads';

function App() {


  return (
     <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/study' element = {<Study />}></Route>
          <Route path='/Ppl' element = {<Ppl />}></Route>

          <Route path='/ppl/:id' element = {<PplTopic />}></Route>


          <Route path='/study/instrument' element = {<Instrument />}></Route>
          <Route path='/study/cpl' element = {<Cpl />}></Route>
          <Route path='/blog' element = {<Blog />}></Route>
          <Route path='/testimony' element = {<Testimony />}></Route>
          <Route path='/contact' element = {<Contact />}></Route>
          <Route path='/newsletter' element = {<Newsletter />}></Route>
          <Route path='/postnews' element = {<PostNews />}></Route>
          <Route path='/news' element = {<News />}></Route>
          <Route path='/products' element = {<Product />}></Route>
          <Route path='/ppl/ppldownloads' element = {<PplDownloads />}></Route>
          <Route path='/videos' element = {<Videos />}></Route>






          <Route path='*' element = {<Notfound />}></Route>







        </Routes>
    


   

  );
}

export default App;
