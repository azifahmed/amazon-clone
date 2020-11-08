import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'
import Home from "./Home"
import Header from "./Header"
import Checkout from "./Checkout"
import Login from "./Login"
import { auth } from "./firebase"
import { useEffect } from "react"
import { useStateValue } from "./StateProvider"


function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('The user is ',authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
          
        })

      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null

       })
     }
    })
  }, [])
return (
  <div className="app">
    <Router>
          <Switch>
      <Route path="/login">
        <Login />
        </Route>
        <Route path="/checkout">
        <Header />
          <Checkout />
        </Route>
        <Route path="/">
        <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
);
}
export default App;