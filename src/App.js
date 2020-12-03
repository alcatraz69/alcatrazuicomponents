import logo from './logo.svg';
import './App.css';
import Wifi from './components/wifi/wifi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Hello Ultimate</h1>
        <Wifi/>
      </header>
    </div>
  );
}

export default App;
