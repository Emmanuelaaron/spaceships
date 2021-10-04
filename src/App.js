import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MyProfile from './components/MyProfile';

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

function Dragons() {
  return <h2>dragons</h2>;
}

function Rockets() {
  return <h2>ROCKETS</h2>;
}

function Missions() {
  return <h2>MISSIONS</h2>;
}

export default App;
