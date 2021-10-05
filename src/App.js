import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MyProfile from './components/MyProfile';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/dragons">
          <Dragons />
        </Route>
        <Route path="/my-profile">
          <MyProfile />
        </Route>
        <Route path={'/' || '/rockets'}>
          <Rockets />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
