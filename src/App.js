import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'
import Home from "./Home"
import Header from "./Header"
import Checkout from "./Checkout"


function App() {
return (
  <div className="app">
    <Router>
    <Header />
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
);
}
export default App;