import './App.css';
import Wifi from './components/wifi/wifi';
import Socialicons from './components/socialsites/socialicons';

import Navbar from './components/navbar/navbar'
import MainSection from './components/main_section/main_section'
import Particles from './components/particle/particle'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Wifi/>
        <Socialicons/>
        <Navbar/>
        <Particles/>
        <MainSection/>
        
      </div>
    </div>
  );
}

export default App;
