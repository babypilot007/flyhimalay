import './App.css';
import p6 from './images/p6.png'

function App() {
  return (
    <div className="App">
      <div className='navbar'>
      
        

				{/* <a href="newsletter.html" onclick="closeNav()">Newsletter</a>
				<a href="journey_so_far.html" onclick="closeNav()">My Journey</a>
				<a href=" blog.html" onclick="closeNav()">Study Material</a>
				<a href="#" onclick="closeNav()">Testimonials</a>
				<a href="#Contact" onclick="closeNav()">Contact</a> */}

      </div>

      <div className='name'>
        <h1>Himalay Jariwala</h1>
        <div className='info'>
        <p>FAA Certified Flight Instructor</p>
				<p>CFI/CFII</p>
        </div>
      </div>


<div className='info_details'> 
				<p>Namaste!</p>
				<p>I am a Certified Flight Instructor,</p>
				<p>With About <span>500 hours of Dual</span> Instructions given.</p>
				<p>I have acquired around <span>1200 Hours</span> of Total Flight Time.</p>
<br></br>
				<p>Currently Instructing at : </p><br></br>
        <button><a href="https://www.p6aviation.com/"><img src={p6} alt="p6"></img></a></button>
</div>
        <div id='Contact'>
          
        </div>
    </div>
  );
}

export default App;
