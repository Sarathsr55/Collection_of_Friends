import './App.css';
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Friendslist from './Components/Friendslist';
import Addfriends from './Components/Addfriends';
import Friendprofile from './Components/Friendprofile';

function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route exact path={'/friends'}><Friendslist/></Route>
      <Route path={'/addfriends'}><Addfriends/></Route>
      <Route path={'/friends/:id'} ><Friendprofile/></Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
