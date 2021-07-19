// import logo from './logo.svg';
import React, {useState, useCallback} from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

import { Users } from './User/Pages/Users';
import { NewPlace } from "./Places/Pages/NewPlace";
import { UserPlaces } from "./Places/Pages/UserPlaces";
import { UpdatePlace } from "./Places/Pages/UpdatePlace";
import { Auth } from "./User/Pages/Auth";
import { MainNavigation } from "./Shared/Components/Navigation/MainNavigation";
import { AuthContext } from "./Shared/Context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if(isLoggedIn){
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path = "/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path = "/places/:placeId" exact>
          <UpdatePlace />
        </Route>
        <Redirect to = "/" />
      </Switch>
    );
  }else{
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path = "/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path = "/auth" exact>
          <Auth />
        </Route>
        <Redirect to = "/auth" />
      </Switch>
    );
  }


  return (
    <div className="App">
      <AuthContext.Provider value = {{isLoggedIn : isLoggedIn, login : login, logout : logout}}>
        <Router>
          <MainNavigation />
          <main>
            {routes}
          </main>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
