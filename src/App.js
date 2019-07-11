import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Menu from "./components/Menu/Menu"

import Home from './pages/Home/Home.js';
import SignUp from './pages/SignUp/SignUp';


import  AppStyle from './AppStyle.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


function App() {
  return (
    <>          
      <AppStyle>
        <Router>
          <Route path="/home" component={Home} />
          <Route path="/sign-up" component={SignUp} />
        </Router>
      </AppStyle>

    </>
  );

}

export default App;
