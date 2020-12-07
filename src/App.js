import './App.css';
import Wifi from './components/wifi/wifi';
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Wifi/>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
