import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/main" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;