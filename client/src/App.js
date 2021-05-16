import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;