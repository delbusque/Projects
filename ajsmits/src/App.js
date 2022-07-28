import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import WhiteHeader from './components/header/WhiteHeader';

import Main from './components/main/Main';
import Apples from './components/fruits/Apples';
import Pears from './components/fruits/Pears';

import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">

      <Header />
      <WhiteHeader />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/fruit/apples' element={<Apples />} />
        <Route path='/fruit/pears' element={<Pears />} />
      </Routes>

      <Footer />


    </div>

  );

}

export default App;
