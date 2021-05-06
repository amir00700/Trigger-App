import React from 'react';
//comoponens and pages
import Home from './Pages/Home';
import Nav from './componets/Nav';
import GlobalStyles from "./componets/GlobalStyle";
import {Route} from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <Nav/>
      <GlobalStyles/>
      <Route path={["/game/:id", "/"]}>
      <Home/>
      </Route>
    </div>
  );
}

export default App;
