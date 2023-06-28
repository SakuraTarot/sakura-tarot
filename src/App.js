import React from 'react';

import Main from './pages/Main'
import Intro from './pages/Intro.jsx';
import { CardProvider } from './context/CardProvider.jsx';

const App = () => {
  return (
      <div>
      <Intro />
      <Main/>
      </div>
      
      
    
  );
};

export default App;
