import './App.css';
import Navbar from './components/Navbar.js'
import isSticky from './components/useSticky.js'

function App() {
  return (
    <div class='background'>
    <Navbar sticky={isSticky} />
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>
          asdf
        </a>
      </header>
      <p>
        
      </p>
    </div>
  );
}

export default App;
