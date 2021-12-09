import './App.css';
import React, { useEffect, useState} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import signin from './pages/signin/signin.component';
import { auth, userDocData } from "./firebase/firebase.utils";
function App() {
  const [authUser, setUser] = useState(null);
    useEffect(() =>{
          auth.onAuthStateChanged(async user =>{
            if(user) {
              const docRef = await userDocData(user);
              docRef.onSnapshot(snapshot => {
                setUser({
                  id : snapshot.id,
                  ...snapshot.data()
                })
              })
            }else{
              setUser(null)
            }
            
        })
    }, [])
  return (
    <div>
      <Router>
      <Header currentUser={authUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
