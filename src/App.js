import Navbar from './Components/Navbar/Navbar';
import Home from './Components/pages/Home/Home';
import About from './Components/pages/About/About';
import Skills from './Components/pages/Skills/Skills';
import Education from './Components/pages/Education/Education';
import Experience from './Components/pages/Experience/Experience';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App" style={{ backgroundColor: ' #16253a' }}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
