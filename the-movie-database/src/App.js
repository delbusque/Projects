import { useState } from 'react';

import './App.css';

import TitlesContext from './contexts/TitlesContext.js';
import SelectedTitlesContext from './contexts/SelectedTitlesContext.js';

import { Input } from './components/Input.js';
import { Titles } from './components/Titles.js';


function App() {

  const [titles, setTitles] = useState([]);
  const [selectedTitles, setSelectedTitles] = useState([]);

  const onChangeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setTitles(JSON.parse(e.target.result));
    };
    reader.readAsText(file);
  }

  console.log(titles);
  console.log(selectedTitles);

  return (
    <TitlesContext.Provider value={{ titles, setTitles, onChangeHandler }}>
      <SelectedTitlesContext.Provider value={{ selectedTitles, setSelectedTitles }}>
        <div className="App">
          <Input />
          {titles.length > 0 && <Titles />}

        </div>
      </SelectedTitlesContext.Provider>
    </TitlesContext.Provider>
  );
}

export default App;
