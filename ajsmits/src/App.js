import './App.css';

import Header from './components/header/Header';
import WhiteHeader from './components/header/WhiteHeader';

import TopSlider from './components/slider/TopSlider';
import IntroBlocks from './components/intro/IntroBlocks.js';
import About from './components/about/About.js';

import Pears from './components/fruits/Pears';
import Apples from './components/fruits/Apples';

import Footer from './components/footer/Footer';





function App() {
  return (
    <div className="App">

      <Header />
      <WhiteHeader />


      <TopSlider />
      <IntroBlocks />
      <About />



      <Apples />

      <Footer />


    </div>

  );

}

export default App;
