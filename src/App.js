import './App.css';
import Navbar from './components/Navbar.js'
import isSticky from './components/useSticky.js'

function App() {
  return (
    <div class='background'>
    <Navbar sticky={isSticky} />
      <header>
{/* Some information */}
      </header>
      <p>
        
      </p>
    </div>
  );
}

export default App;
