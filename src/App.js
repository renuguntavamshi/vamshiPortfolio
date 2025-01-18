import './App.css';
import Nametext from './components/Nametext';
import '@fontsource/corinthia';
import AboutMe from './components/AboutMe';

import Counts from './components/Counts'
import Skillset from './components/Skillset';
import Knowmore from './components/Knowmore';
// import Carousel from './components/Corousel';
import Footer from './components/Footer';
import Vamshiimagenew from './assets/vamshiimg.png';
function App() {
  
  
  return (
    <div className="App">
      
<Nametext />
<br />
<AboutMe image={Vamshiimagenew}/>
<br />
<Counts />
<br />
{/* <Carousel /> */}
<h2>Inspirational Quotes</h2>
<Skillset />
<br />
<Knowmore />
<Footer />
    </div>
  );
}

export default App;
