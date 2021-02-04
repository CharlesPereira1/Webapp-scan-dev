import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Route from './Route';

const App: React.FC = () => {
  return (
    <Router>
      <Route />
      <Home />
      <GlobalStyle />
    </Router>
  );
};

export default App;
