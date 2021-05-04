import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <audio><source src="/images/audio/glock.mp3"/></audio>
      <div id="content-wrapper">
      
            <a href="/" id="demo-logo">
                <img src="/images/logo.png" width="100px" alt="CodeBlack" />
            </a>

            <About />
            <Navigation />
            <Resume />
            <Portfolio />
            <Contact />
            <Footer />

      </div>
    </div>
  );
}

export default App;
