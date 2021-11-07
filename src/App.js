import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
