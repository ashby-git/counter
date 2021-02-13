import './App.css';
import './components/counter-display/counter-display.component';
import CounterDisplay from './components/counter-display/counter-display.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 700, height: 200 }}>
          <CounterDisplay count="2" />
        </div>
      </header>
    </div>
  );
}

export default App;
