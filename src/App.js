import './App.css';
import './components/counter-display/counter-display.component';
import Homepage from './components/homepage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Counter
      </header>
      <div>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
