import './App.css';
import Wifi from './components/wifi/wifi';
import Socialicons from './components/socialsites/socialicons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wifi/>
        <Socialicons/>
      </header>
    </div>
  );
}

export default App;
