// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

import { Users } from './User/Pages/Users';
import { NewPlace } from "./Places/Pages/NewPlace";
import { UserPlaces } from "./Places/Pages/UserPlaces";
import { UpdatePlace } from "./Places/Pages/UpdatePlace";
import { Auth } from "./User/Pages/Auth";
import { MainNavigation } from "./Shared/Components/Navigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <main>
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
            <Route path = "/auth" exact>
              <Auth />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
