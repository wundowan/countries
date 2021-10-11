import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import ListCountries from './Components/PageLayouts/ListCountries';
import CountryDash from './Components/PageLayouts/CountryDash';
import CommentsPage from './Components/PageLayouts/CommentsPage';
import CasesPage from './Components/PageLayouts/CasesPage'

import Dashboard from './Components/Authentication/Dashboard';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import InputPropBaseDetails from './Components/DetailsLayout/Inputs/InputPropBaseDetails';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/verify", {
        method: "GET",
        headers: { token: localStorage.token }
      })

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)

      console.log(response.headers)

      console.log(localStorage.token)
      
      //console.log(isAuthenticated);

    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    isAuth();
  }, [isAuth])

  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={ListCountries}  />
          <Route exact path='/dashboard' component={CountryDash} exact />
          <Route path='/dashboard/:type' component={CountryDash} />
          <Route path='/comments' component={CommentsPage} />
          <Route path='/caseloads/:type' component={CasesPage} />
          <Route exact path="/new" component={InputPropBaseDetails}/>
          <Route exact path="/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/dash" />} />
          <Route exact path="/register" render={props => !isAuthenticated ? <Register {...props} setAuth={setAuth} /> : <Redirect to="/login"/> } />
          <Route exact path="/dash" render={props => isAuthenticated ? <Dashboard {...props} setAuth={setAuth} /> : <Redirect to="/login"/> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
