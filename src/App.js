import './App.css';
import Navbar from './components/Navbar.js'
import isSticky from './components/useSticky.js'
import Greetings from './components/Greetings.js'

function App() {
  return (
    <div class='background'>
    <Navbar sticky={isSticky} />
      <header/>
      <Greetings />
      <p>
        
      </p>
    </div>
  );
}

export default App;
