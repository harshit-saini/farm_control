import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Router, Switch, Route } from 'react-router-dom'

import UserContextProvider from './contexts/userContext'

import Index from './pages/index'
import UserProfile from './pages/UserProfile';
import MyFarm from './pages/MyFarm';
import Admin from './pages/Admin';

import history from "./history";


function App() {
  return (
    <Router history={history}>
      <ToastContainer />
      <Switch>
        <UserContextProvider>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/profile" >
            <UserProfile />
          </Route>
          <Route path="/my-farm" >
            <MyFarm />
          </Route>
          <Route path="/admin" >
            <Admin />
          </Route>
        </UserContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
