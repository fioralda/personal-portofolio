import NavBar from './components/NavBar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
