import './App.css';
import React, { useEffect} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import signin from './pages/signin/signin.component';
import { auth, userDocData } from "./firebase/firebase.utils";
import { connect } from 'react-redux'
import { setAuthUser } from "./redux/user/user.action"
function App({setCurrentUser}) { 
    useEffect(() =>{
          auth.onAuthStateChanged(async user =>{
            if(user) {
              const docRef = await userDocData(user);
              docRef.onSnapshot(snapshot => {
                setCurrentUser({
                  id : snapshot.id,
                  ...snapshot.data()
                })
              })
            }else{
              setCurrentUser(null)
            } 
        })
    }, [setCurrentUser])
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={signin} />
        </Switch>
      </Router>
    </div>
  );
}

const mapDispatchProps = dispatch => ({
  setCurrentUser : user => dispatch(setAuthUser(user))
})
export default connect(null, mapDispatchProps)(App);
