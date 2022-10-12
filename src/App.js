import Home from './components/Home/Home';
import './App.css';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

function App() {
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
