import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import StylePage from "pages/Shop/StylePage";
import MainPage from "pages/Shop/MainPage";
import LoginPage from "pages/Auth/LoginPage";
import RegisterPage from "pages/Auth/RegisterPage";
import RegisterClosetPage from "pages/Auth/RegisterClosetPage";
import MyPage from "pages/MyPage/MyPage";
import ImageUploadPage from "pages/MyPage/ImageUploadPage";
import SimilarItemPage from "pages/Shop/SimilarItemPage";
import RecentItemPage from "pages/MyPage/RecentItemPage";
import RecommendItemPage from "pages/Shop/RecommendItemPage";
import LikeItemPage from "pages/MyPage/LikeItemPage";
import TutorialPage from "pages/TutorialPage";
import StartPage from "pages/Shop/TutorialPage";

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/style" component={StylePage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/register/closet" component={RegisterClosetPage} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/closet" component={ImageUploadPage} />
        <Route exact path="/smlritem" component={SimilarItemPage} />
        <Route exact path="/likeitem" component={LikeItemPage} />
        <Route exact path="/rcntitem" component={RecentItemPage} />
        <Route exact path="/rcmditem" component={RecommendItemPage} />
        <Route exact path="/" component={TutorialPage} />
        <Route exact path="/start" component={StartPage} />
      </Switch>
    </Router>
  );
}

export default App;
