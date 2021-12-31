import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import signin from './pages/signin/signin.component';
function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={signin} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
