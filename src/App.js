// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

import { Users } from './User/Pages/Users';
import { NewPlace } from "./Places/Pages/NewPlace";
import { MainNavigation } from "./Shared/Navigation/MainNavigation";

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
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
