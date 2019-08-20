import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './components/Login/Login.component'
import Friends from './components/Friends/Friends.component'
import Navbar from './components/Navbar/Navbar.component'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/api/login' component={Login} />
        <Route path='/api/friends' component={Friends} />
      </Switch>
    </div>
  );
}

export default App;
