import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import MainPage from "pages/MainPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import RegisterClosetPage from "pages/RegisterClosetPage";
import MyPage from "pages/MyPage";
import ImageUploadPage from "pages/ImageUploadPage";
import SimilarItemPage from "pages/SimilarItemPage";
import RecentItemPage from "pages/RecentItemPage";
import RecommendItemPage from "pages/RecommendItemPage";
import LikeItemPage from "pages/LikeItemPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/register/closet" component={RegisterClosetPage} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/imgupload" component={ImageUploadPage} />
        <Route exact path="/smlritem" component={SimilarItemPage} />
        <Route exact path="/likeitem" component={LikeItemPage} />
        <Route exact path="/rcntitem" component={RecentItemPage} />
        <Route exact path="/rcmditem" component={RecommendItemPage} />
      </Switch>
    </Router>
  );
}

export default App;
