import Landing from './pages/Landing';
import Login from './pages/Login';
import EmailLogin from './pages/EmailLogin';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/login-email">
          <EmailLogin />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
