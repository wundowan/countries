import logo from './logo.svg';
import './App.css';
import ListCountries from './Components/ListCountries';
import { Route, Switch } from 'react-router-dom';
import CountryDash from './Components/CountryDash';
import CommentsPage from './Components/CommentsPage';
import CasesPage from './Components/CasesPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={ListCountries} exact />
        <Route path='/dashboard' component={CountryDash} exact />
        <Route path='/dashboard/:type' component={CountryDash} />
        <Route path='/comments' component={CommentsPage} />
        <Route path='/caseloads/:type' component={CasesPage} />

      </Switch>
    </div>
  );
}

export default App;
