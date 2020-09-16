import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Main from './components/ui/Main'
// import Second from './components/ui/Second'

const App = () => (
  <Router>
      <Route path="/" component={Main} />
  </Router>
);


export default App;
