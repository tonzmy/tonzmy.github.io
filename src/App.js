import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Main from './components/ui/Main'
import Second from './components/ui/Second'

const App = () => (
  <Router>
    <switch>
      <Route path="/" component={Main} />
    </switch>
  </Router>
);


export default App;
