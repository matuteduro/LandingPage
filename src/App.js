import Home from './components/Home/Home';
import './App.css';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Aos from 'aos'

function App() {
  Aos.init({
    duration: 1800,
    offset: 100,
  })
  return (
    <div className="App">
      <Home />
      <About />
      <Detail />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
