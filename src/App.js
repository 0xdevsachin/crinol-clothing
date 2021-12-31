import "./App.css";
import React, { useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import signin from "./pages/signin/signin.component";
import { useDispatch, useSelector } from "react-redux";
import { auth, userDocData } from "./firebase/firebase.utils";
import { setUser } from "./redux/action/actions";
function App() {
  const userState = useSelector( state => state.authReducer);
  const dispatch = useDispatch();
  useEffect(() => {
   
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = await userDocData(user);
        docRef.onSnapshot((snapshot) => {
          dispatch(
            setUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
          localStorage.setItem('crinol-clothing', snapshot.id)
        });
      } else {
        dispatch(
          setUser(null)
          );
          localStorage.removeItem('crinol-clothing')
      }
    });
    // eslint-disable-next-line
  }, []);
  // Checking if there any user currently Logged in 
  var currentUser = auth.currentUser;
  if(currentUser){
    localStorage.setItem('crinol-clothing', currentUser.uid)
  }
  console.log(userState);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage} />
          { !currentUser
          ?
          <Route exact path="/signin" component={signin} />
          :
          <Redirect from="/signin" to="/" />
        }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
