import { Routes, Route } from 'react-router-dom';


import TopSlider from "./slider/TopSlider";
import IntroBlocks from './intro/IntroBlocks.js';
import About from './about/About.js';

import Pears from '../fruits/Pears';
import Apples from '../fruits/Apples';

const Main = () => {
    return (<>
        <TopSlider />
        <IntroBlocks />
    </>
    )
}

export default Main;