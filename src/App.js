import './App.css';
import NavbarCom from './components/NavbarCom.js'
import Header from './components/Header.js'
import Portfolio from './components/Portfolio.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Social from './components/Social.js'
import Footer from './components/Footer.js'
function App() {
  return (
    <div  className="App">
        <NavbarCom/>
        <Header/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Social/>
        <Footer/>
    </div>
  );
}

export default App;
