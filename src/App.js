import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

import Main from "./pages/Main";
import Board from "./pages/Board";
import Alarm from "./pages/Alarm";
import MessagesDetail from "./pages/Alarm/components/MessagesDetail";
import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";
import Mypage from "./pages/Mypage";
import MypageAuthDetail from "./pages/Mypage/components/schoolAuthDetail";
import MypageEdit from "./pages/Mypage/components/nickChange";
import MypageAuth from "./pages/Mypage/components/schoolAuth";
import Setting from "./pages/Setting";
import BoardDetail from "./pages/BoardDetail";
import Search from "./pages/Search";
import Post from "./pages/Post";
import Contents from "./pages/BoardDetail/components/BoardContent";
import BoardCategory from "./pages/Board/BoardCategory";
import axios from "axios";
const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  /*
  useEffect(() => {
    const fetchLogin = async () => {
      const result = await axios("/api/user");
      console.log(result);
      if (result.data.success) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };
    fetchLogin();
  }, []);
*/
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {isLogin ? (
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/board" component={Board} />
            <Route exact path="/alarm" component={Alarm} />
            <Route exact path="/alarm/:id" component={MessagesDetail} />
            <Route exact path="/mypage" component={Mypage} />
            <Route exact path="/setting" component={Setting} />
            <Route exact path="/mypage/auth" component={MypageAuth} />
            <Route exact path="/mypage/edit" component={MypageEdit} />
            <Route
              exact
              path="/mypage/auth/detail"
              component={MypageAuthDetail}
            />
            <Route exact path="/board/list" component={BoardDetail} />
            <Route
              exact
              path="/board/list/:category"
              component={BoardCategory}
            />
            <Route exact path="/search" component={Search} />
            <Route exact path="/board/post" component={Post} />
            <Route exact path="/board/detail" component={Contents} />
          </Switch>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
