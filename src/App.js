import './App.css';
import Wifi from './components/wifi/wifi';
import Socialicons from './components/socialsites/socialicons';
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Wifi/>
        <Socialicons/>
      </header>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
