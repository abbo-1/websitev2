import './App.css';
import Navbar from './components/Navbar.js'
import isSticky from './components/useSticky.js'
import Greetings from './components/Greetings.js'
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

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
