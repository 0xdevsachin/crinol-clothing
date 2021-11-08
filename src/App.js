import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
