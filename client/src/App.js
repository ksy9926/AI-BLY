import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import LandingPage from './pages/LandingPage';
import ImageUploadPage from './pages/ImageUploadPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/imageupload/:userid" component={ImageUploadPage} />
      </Switch>
    </Router>
  );
}

export default App;