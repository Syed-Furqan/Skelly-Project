import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;