import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './components/Login/Login.component'
import Friends from './components/Friends/Friends.component'
import Navbar from './components/Navbar/Navbar.component'
import CreateFriend from './components/CreateFriend/CreateFriend.component'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/api/login' component={Login} />
        <PrivateRoute exact path='/api/friends' component={Friends} />
        <PrivateRoute exact path='/api/create-friend' component={CreateFriend} />
      </Switch>
    </div>
  );
}

export default App;
