import './App.css';
import Wifi from './components/wifi/wifi';
import Socialicons from './components/socialsites/socialicons';

import Navbar from './components/navbar/navbar'
import MainSection from './components/main_section/main_section'
import SectionHeading from './components/sections/sectionHeading/sectionHeading'
import ProjectContainer from './components/sections/projectContainer/projectContainer'
import BlogContainer from './components/sections/blogContainer/blogContainer'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Wifi/>
        <Socialicons/>
        <Navbar/>
        {/* <Particles/> */}
        <MainSection/>
        <SectionHeading/>
        <ProjectContainer/>
        <BlogContainer/>
      </div>
    </div>
  );
}

export default App;
