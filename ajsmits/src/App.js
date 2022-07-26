import './App.css';

import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import ForBox from './components/about/ForBox';
import Pears from './components/fruits/Pears';
import Apples from './components/fruits/Apples';


function App() {
  return (
    <div className="App">

      <Header />

      <Slider />
      <About />
      <ForBox />
      <Pears />
      <Apples />

      <Footer />


    </div>

  );

}

export default App;
