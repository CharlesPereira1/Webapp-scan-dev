import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Route from './Route';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
