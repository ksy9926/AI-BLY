import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import LandingPage from './pages/LandingPage';
import ImageUploadPage from './pages/ImageUploadPage';
import SimilarItemPage from './pages/SimilarItemPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/imgupload/:userid" component={ImageUploadPage} />
        <Route exact path="/smlritem/:userid" component={SimilarItemPage} />
      </Switch>
    </Router>
  );
}

export default App;