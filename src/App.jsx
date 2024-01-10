
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Doctor from './components/Doctor';
import Blog from './components/Blog';
import Footer from './components/Footer';
function App() {
  return (
    <div >
     <Navbar/>
     <div id='home'>

    <Home/>
     </div>
     <div id='about'>
      <About/>
     </div>
     <div id='services'><Services/></div>
     <div id='doctor'>
      <Doctor/>
     </div>
     <div id="blog">
     <Blog/>
     </div>
     <div id="footer">
      <Footer/>
     </div>
     </div>
  );
}

export default App;
