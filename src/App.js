import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/checkout">
          <div className="App">
            <Checkout />
          </div>
        </Route>
        <Route path="/">
          <div className="App">
            <Home />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
